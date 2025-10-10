#!/bin/bash

# Script de backup PostgreSQL pour l'application AIR
# Usage: ./backup-db.sh [container_name] [backup_dir]

set -e

# Configuration
CONTAINER_NAME=${1:-"showcase-api-db-1"}
BACKUP_DIR=${2:-"/backups/postgres"}
RETENTION_DAYS=30
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="air_db_backup_${DATE}.sql.gz"

# Créer le répertoire de backup s'il n'existe pas
mkdir -p "$BACKUP_DIR"

echo "🔄 Début du backup de la base de données..."
echo "📁 Répertoire de backup: $BACKUP_DIR"
echo "📅 Date: $DATE"

# Vérifier que le conteneur existe
if ! docker ps --format "table {{.Names}}" | grep -q "$CONTAINER_NAME"; then
    echo "❌ Erreur: Le conteneur $CONTAINER_NAME n'est pas en cours d'exécution"
    exit 1
fi

# Effectuer le backup avec pg_dump
echo "💾 Création du backup..."
docker exec "$CONTAINER_NAME" pg_dump \
    -U air-admin \
    -d air-db \
    --verbose \
    --clean \
    --if-exists \
    --no-owner \
    --no-privileges \
    | gzip > "$BACKUP_DIR/$BACKUP_FILE"

# Vérifier que le backup a réussi
if [ $? -eq 0 ] && [ -f "$BACKUP_DIR/$BACKUP_FILE" ]; then
    BACKUP_SIZE=$(du -h "$BACKUP_DIR/$BACKUP_FILE" | cut -f1)
    echo "✅ Backup réussi: $BACKUP_FILE ($BACKUP_SIZE)"
else
    echo "❌ Erreur lors du backup"
    exit 1
fi

# Nettoyer les anciens backups (rotation)
echo "🧹 Nettoyage des anciens backups (plus de $RETENTION_DAYS jours)..."
find "$BACKUP_DIR" -name "air_db_backup_*.sql.gz" -type f -mtime +$RETENTION_DAYS -delete

# Afficher les backups disponibles
echo "📋 Backups disponibles:"
ls -lh "$BACKUP_DIR"/air_db_backup_*.sql.gz 2>/dev/null || echo "Aucun backup trouvé"

echo "🎉 Backup terminé avec succès!"
