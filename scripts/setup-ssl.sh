#!/bin/bash

# Script d'installation SSL avec Let's Encrypt pour AIR
# Usage: ./setup-ssl.sh [email] [domain]

set -e

# Configuration
EMAIL=${1:-"admin@accueil-insertion-rencontre.fr"}
DOMAIN=${2:-"accueil-insertion-rencontre.fr"}
PROJECT_DIR="/opt/air"
NGINX_SSL_DIR="$PROJECT_DIR/nginx/ssl"
CERTBOT_DIR="/var/www/certbot"

echo "🔐 Configuration SSL pour $DOMAIN"
echo "📧 Email: $EMAIL"
echo "📁 Répertoire projet: $PROJECT_DIR"

# Vérifier que le script est exécuté en tant que root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Ce script doit être exécuté en tant que root"
    echo "Usage: sudo ./setup-ssl.sh [email] [domain]"
    exit 1
fi

# Créer les répertoires nécessaires
echo "📁 Création des répertoires..."
mkdir -p "$NGINX_SSL_DIR"
mkdir -p "$CERTBOT_DIR"
mkdir -p "$PROJECT_DIR/nginx/ssl/live/$DOMAIN"

# Installer Certbot si pas déjà installé
if ! command -v certbot &> /dev/null; then
    echo "📦 Installation de Certbot..."
    apt update
    apt install -y certbot python3-certbot-nginx
else
    echo "✅ Certbot déjà installé"
fi

# Arrêter nginx temporairement
echo "⏹️ Arrêt de nginx..."
systemctl stop nginx 2>/dev/null || true

# Démarrer les conteneurs Docker en mode HTTP uniquement
echo "🐳 Démarrage des conteneurs en mode HTTP..."
cd "$PROJECT_DIR"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml down
# Exporter les variables d'environnement nécessaires
export PUBLIC_API_URL='https://accueil-insertion-rencontre.fr/api'
export PUBLIC_ASSET_URL='https://accueil-insertion-rencontre.fr'
export API_URL='https://accueil-insertion-rencontre.fr/api'
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml up -d

# Attendre que les services soient prêts
echo "⏳ Attente du démarrage des services..."
sleep 30

# Vérifier que le site est accessible
echo "🔍 Vérification de l'accessibilité du site..."
if ! curl -f -s "http://$DOMAIN" > /dev/null; then
    echo "❌ Le site n'est pas accessible sur http://$DOMAIN"
    echo "Vérifiez que:"
    echo "1. Le DNS pointe vers ce serveur"
    echo "2. Le port 80 est ouvert"
    echo "3. Les conteneurs Docker sont démarrés"
    exit 1
fi

echo "✅ Site accessible sur http://$DOMAIN"

# Obtenir le certificat SSL
echo "🔐 Obtention du certificat SSL..."
certbot certonly \
    --webroot \
    --webroot-path="$CERTBOT_DIR" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    --domains "$DOMAIN,www.$DOMAIN" \
    --non-interactive

# Vérifier que les certificats ont été créés
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "❌ Échec de l'obtention du certificat SSL"
    exit 1
fi

echo "✅ Certificat SSL obtenu avec succès"

# Copier les certificats vers le répertoire nginx
echo "📋 Copie des certificats..."
cp "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" "$NGINX_SSL_DIR/live/$DOMAIN/"
cp "/etc/letsencrypt/live/$DOMAIN/privkey.pem" "$NGINX_SSL_DIR/live/$DOMAIN/"
cp "/etc/letsencrypt/live/$DOMAIN/chain.pem" "$NGINX_SSL_DIR/live/$DOMAIN/"

# Ajuster les permissions
chown -R root:root "$NGINX_SSL_DIR"
chmod -R 600 "$NGINX_SSL_DIR"

# Remplacer la configuration nginx par la version SSL
echo "⚙️ Configuration de nginx pour SSL..."
cp "$PROJECT_DIR/nginx/nginx-ssl.conf" "$PROJECT_DIR/nginx/nginx.conf"

# Redémarrer les conteneurs avec la nouvelle configuration
echo "🔄 Redémarrage avec la configuration SSL..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml down
# Exporter les variables d'environnement nécessaires
export PUBLIC_API_URL='https://accueil-insertion-rencontre.fr/api'
export PUBLIC_ASSET_URL='https://accueil-insertion-rencontre.fr'
export API_URL='https://accueil-insertion-rencontre.fr/api'
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml up -d

# Attendre le redémarrage
sleep 30

# Vérifier que HTTPS fonctionne
echo "🔍 Vérification de HTTPS..."
if curl -f -s "https://$DOMAIN" > /dev/null; then
    echo "✅ HTTPS fonctionne correctement"
else
    echo "❌ Problème avec HTTPS"
    echo "Vérifiez les logs: docker compose logs nginx"
    exit 1
fi

# Configurer le renouvellement automatique
echo "🔄 Configuration du renouvellement automatique..."
cat > /etc/cron.d/certbot-renew << EOF
# Renouvellement automatique des certificats SSL
0 12 * * * root certbot renew --quiet --post-hook "docker compose -f $PROJECT_DIR/docker-compose.prod.yml -f $PROJECT_DIR/docker-compose.override.prod.yml restart nginx"
EOF

# Script de renouvellement avec Docker
cat > "$PROJECT_DIR/scripts/renew-ssl.sh" << 'EOF'
#!/bin/bash
# Script de renouvellement SSL avec Docker

PROJECT_DIR="/opt/air"
cd "$PROJECT_DIR"

# Renouveler les certificats
certbot renew --quiet

# Copier les nouveaux certificats
DOMAIN="accueil-insertion-rencontre.fr"
cp "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" "$PROJECT_DIR/nginx/ssl/live/$DOMAIN/"
cp "/etc/letsencrypt/live/$DOMAIN/privkey.pem" "$PROJECT_DIR/nginx/ssl/live/$DOMAIN/"
cp "/etc/letsencrypt/live/$DOMAIN/chain.pem" "$PROJECT_DIR/nginx/ssl/live/$DOMAIN/"

# Redémarrer nginx
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml restart nginx

echo "✅ Certificats SSL renouvelés et nginx redémarré"
EOF

chmod +x "$PROJECT_DIR/scripts/renew-ssl.sh"

echo ""
echo "🎉 Configuration SSL terminée avec succès !"
echo ""
echo "📋 Résumé:"
echo "  • Domaine: https://$DOMAIN"
echo "  • Certificat: /etc/letsencrypt/live/$DOMAIN/"
echo "  • Renouvellement automatique: configuré"
echo ""
echo "🔗 Testez votre site:"
echo "  • HTTP: http://$DOMAIN (redirige vers HTTPS)"
echo "  • HTTPS: https://$DOMAIN"
echo "  • Admin: https://$DOMAIN/admin"
echo "  • API: https://$DOMAIN/api"
echo ""
echo "📝 Commandes utiles:"
echo "  • Logs nginx: docker compose logs nginx"
echo "  • Renouvellement manuel: $PROJECT_DIR/scripts/renew-ssl.sh"
echo "  • Statut certificats: certbot certificates"
