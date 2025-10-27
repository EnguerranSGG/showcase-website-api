#!/bin/bash

# Script de configuration du VPS pour GitHub Actions
# Usage: ./setup-vps-for-github-actions.sh [user] [host]

set -e

USER=${1:-"root"}
HOST=${2:-"your-vps-ip"}

echo "🔧 Configuration du VPS pour GitHub Actions"
echo "👤 Utilisateur: $USER"
echo "🌐 Host: $HOST"

# Vérifier que le script est exécuté en tant que root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Ce script doit être exécuté en tant que root"
    echo "Usage: sudo ./setup-vps-for-github-actions.sh [user] [host]"
    exit 1
fi

# Mettre à jour le système
echo "📦 Mise à jour du système..."
apt update && apt upgrade -y

# Installer Docker si pas déjà installé
if ! command -v docker &> /dev/null; then
    echo "🐳 Installation de Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    systemctl enable docker
    systemctl start docker
else
    echo "✅ Docker déjà installé"
fi

# Installer Docker Compose si pas déjà installé
if ! command -v docker-compose &> /dev/null; then
    echo "🐳 Installation de Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
else
    echo "✅ Docker Compose déjà installé"
fi

# Installer Certbot si pas déjà installé
if ! command -v certbot &> /dev/null; then
    echo "🔐 Installation de Certbot..."
    apt install -y certbot python3-certbot-nginx
else
    echo "✅ Certbot déjà installé"
fi

# Créer l'utilisateur pour GitHub Actions si nécessaire
if ! id "github-actions" &>/dev/null; then
    echo "👤 Création de l'utilisateur github-actions..."
    useradd -m -s /bin/bash github-actions
    usermod -aG docker github-actions
    usermod -aG sudo github-actions
else
    echo "✅ Utilisateur github-actions déjà créé"
fi

# Créer les répertoires nécessaires
echo "📁 Création des répertoires..."
mkdir -p /opt/air
mkdir -p /opt/air-staging
mkdir -p /backups/air
mkdir -p /var/www/certbot

# Ajuster les permissions
chown -R github-actions:github-actions /opt/air
chown -R github-actions:github-actions /opt/air-staging
chown -R github-actions:github-actions /backups/air
chown -R www-data:www-data /var/www/certbot

# Configurer SSH pour GitHub Actions
echo "🔑 Configuration SSH pour GitHub Actions..."
mkdir -p /home/github-actions/.ssh
chmod 700 /home/github-actions/.ssh

# Créer une clé SSH pour GitHub Actions
if [ ! -f /home/github-actions/.ssh/id_rsa ]; then
    echo "🔑 Génération de la clé SSH..."
    sudo -u github-actions ssh-keygen -t rsa -b 4096 -f /home/github-actions/.ssh/id_rsa -N ""
    sudo -u github-actions ssh-keyscan -H $HOST >> /home/ggithub-actions/.ssh/known_hosts
fi

# Configurer sudo sans mot de passe pour github-actions
echo "🔐 Configuration sudo sans mot de passe..."
cat > /etc/sudoers.d/github-actions << EOF
github-actions ALL=(ALL) NOPASSWD: /usr/bin/docker
github-actions ALL=(ALL) NOPASSWD: /usr/local/bin/docker-compose
github-actions ALL=(ALL) NOPASSWD: /usr/bin/certbot
github-actions ALL=(ALL) NOPASSWD: /bin/systemctl restart nginx
github-actions ALL=(ALL) NOPASSWD: /bin/systemctl stop nginx
github-actions ALL=(ALL) NOPASSWD: /bin/systemctl start nginx
EOF

# Configurer le firewall
echo "🔥 Configuration du firewall..."
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw --force enable

# Créer le script de déploiement
echo "📝 Création du script de déploiement..."
cat > /opt/air/deploy.sh << 'EOF'
#!/bin/bash
# Script de déploiement pour GitHub Actions

set -e

PROJECT_DIR="/opt/air"
BACKUP_DIR="/backups/air"

echo "🚀 Déploiement en cours..."

# Créer un backup avant déploiement
if [ -f "$PROJECT_DIR/scripts/backup-full.sh" ]; then
    echo "💾 Création du backup..."
    cd "$PROJECT_DIR"
    ./scripts/backup-full.sh "pre-deployment-$(date +%Y%m%d-%H%M%S)"
fi

# Arrêter les services
echo "⏹️ Arrêt des services..."
cd "$PROJECT_DIR"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml down

# Construire et démarrer les services
echo "🔨 Construction et démarrage des services..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml up -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 30

# Appliquer les migrations
echo "🗄️ Application des migrations..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec -T api npx prisma migrate deploy

# Vérifier la santé des services
echo "🔍 Vérification de la santé des services..."
if curl -f -s "https://accueil-insertion-rencontre.fr/health" > /dev/null; then
    echo "✅ Déploiement réussi"
else
    echo "❌ Échec du déploiement"
    exit 1
fi

echo "🎉 Déploiement terminé avec succès"
EOF

chmod +x /opt/air/deploy.sh
chown github-actions:github-actions /opt/air/deploy.sh

# Afficher la clé publique SSH
echo ""
echo "🔑 Clé publique SSH pour GitHub Actions:"
echo "=========================================="
cat /home/github-actions/.ssh/id_rsa.pub
echo "=========================================="
echo ""
echo "📋 Instructions:"
echo "1. Copiez la clé publique ci-dessus"
echo "2. Ajoutez-la dans GitHub > Settings > Secrets and variables > Actions"
echo "3. Créez les secrets suivants:"
echo "   - PRODUCTION_SSH_KEY: Contenu de /home/github-actions/.ssh/id_rsa"
echo "   - PRODUCTION_USER: github-actions"
echo "   - PRODUCTION_HOST: $HOST"
echo "   - STAGING_SSH_KEY: (même clé privée)"
echo "   - STAGING_USER: github-actions"
echo "   - STAGING_HOST: $HOST"
echo ""
echo "✅ Configuration du VPS terminée !"
