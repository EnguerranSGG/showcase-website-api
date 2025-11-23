#!/bin/bash

# Script de backup complet pour l'application AIR
# Backup de la DB + fichiers uploadés + configuration

set -e

# Configuration
BACKUP_DIR="/backups/air-app"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="air_full_backup_${DATE}"
BACKUP_PATH="$BACKUP_DIR/$BACKUP_NAME"
RETENTION_DAYS=30

echo "🔄 Début du backup complet de l'application AIR..."
echo "📁 Répertoire de backup: $BACKUP_PATH"

# Créer le répertoire de backup
# Note: Le répertoire /backups doit être créé manuellement avec les bonnes permissions
mkdir -p "$BACKUP_PATH"

# 1. Backup de la base de données
echo "💾 Backup de la base de données..."
# Détecter automatiquement le nom du conteneur DB
DB_CONTAINER=$(docker ps --format "{{.Names}}" | grep -E "(air-db-1|showcase-api-db-1|db)" | head -1)
if [ -z "$DB_CONTAINER" ]; then
    echo "⚠️  Aucun conteneur DB trouvé, utilisation du nom par défaut: air-db-1"
    DB_CONTAINER="air-db-1"
fi
./scripts/backup-db.sh "$DB_CONTAINER" "$BACKUP_PATH"

# 2. Backup des fichiers uploadés (si ils existent)
echo "📁 Backup des fichiers uploadés..."
if docker exec showcase-api 2>/dev/null test -d /app/uploads; then
    docker exec showcase-api tar czf - /app/uploads > "$BACKUP_PATH/uploads.tar.gz" 2>/dev/null || echo "⚠️  Aucun fichier uploadé trouvé"
fi

# 3. Backup des fichiers de configuration
echo "⚙️  Backup des fichiers de configuration..."
cp docker-compose.prod.yml "$BACKUP_PATH/" 2>/dev/null || echo "⚠️  docker-compose.prod.yml non trouvé"
cp -r nginx "$BACKUP_PATH/" 2>/dev/null || echo "⚠️  Dossier nginx non trouvé"

# 4. Backup des variables d'environnement (sans les secrets)
echo "🔧 Backup des variables d'environnement..."
if [ -f .env.prod ]; then
    # Copier .env.prod en masquant les secrets
    grep -v -E "(JWT_ACCESS_SECRET|JWT_REFRESH_SECRET|SMTP_PASS)" .env.prod > "$BACKUP_PATH/env.prod.sample" 2>/dev/null || echo "⚠️  Impossible de copier .env.prod"
fi

# 5. Informations système
echo "💻 Informations système..."
{
    echo "=== INFORMATIONS SYSTÈME ==="
    echo "Date: $(date)"
    echo "Hostname: $(hostname)"
    echo "Docker version: $(docker --version)"
    echo "Docker Compose version: $(docker compose version)"
    echo ""
    echo "=== CONTAINERS EN COURS ==="
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""
    echo "=== VOLUMES DOCKER ==="
    docker volume ls
} > "$BACKUP_PATH/system_info.txt"

# 6. Créer un fichier de métadonnées
echo "📋 Création des métadonnées..."
{
    echo "AIR Application Backup"
    echo "====================="
    echo "Date: $(date)"
    echo "Backup ID: $BACKUP_NAME"
    echo "Type: Full backup"
    echo ""
    echo "Contenu:"
    echo "- Base de données PostgreSQL"
    echo "- Fichiers uploadés (si présents)"
    echo "- Configuration Docker"
    echo "- Configuration Nginx"
    echo "- Variables d'environnement (masquées)"
    echo "- Informations système"
    echo ""
    echo "Pour restaurer:"
    echo "1. ./scripts/restore-db.sh $BACKUP_PATH/air_db_backup_*.sql.gz"
    echo "2. Restaurer manuellement les autres fichiers si nécessaire"
} > "$BACKUP_PATH/README.txt"

# 7. Créer une archive tar.gz du backup complet
echo "📦 Création de l'archive..."
cd "$BACKUP_DIR"
tar -czf "${BACKUP_NAME}.tar.gz" "$BACKUP_NAME"
rm -rf "$BACKUP_NAME"

# 8. Nettoyer les anciens backups
echo "🧹 Nettoyage des anciens backups (plus de $RETENTION_DAYS jours)..."
find "$BACKUP_DIR" -name "air_full_backup_*.tar.gz" -type f -mtime +$RETENTION_DAYS -delete

# 9. Afficher le résumé
BACKUP_SIZE=$(du -h "${BACKUP_NAME}.tar.gz" | cut -f1)
echo "✅ Backup complet réussi: ${BACKUP_NAME}.tar.gz ($BACKUP_SIZE)"

echo "📋 Backups disponibles:"
ls -lh "$BACKUP_DIR"/air_full_backup_*.tar.gz 2>/dev/null || echo "Aucun backup trouvé"

echo "🎉 Backup complet terminé avec succès!"
