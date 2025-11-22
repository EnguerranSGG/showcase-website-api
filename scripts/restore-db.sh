#!/bin/bash

# Script de restauration PostgreSQL pour l'application AIR
# Usage: ./restore-db.sh [backup_file] [container_name]

set -e

# Configuration
BACKUP_FILE=${1}
# Détecter automatiquement le nom du conteneur DB si non fourni
if [ -z "$2" ]; then
    CONTAINER_NAME=$(docker ps --format "{{.Names}}" | grep -E "(air-db-1|showcase-api-db-1|db)" | head -1)
    if [ -z "$CONTAINER_NAME" ]; then
        CONTAINER_NAME="air-db-1"
    fi
else
    CONTAINER_NAME=$2
fi

if [ -z "$BACKUP_FILE" ]; then
    echo "❌ Erreur: Veuillez spécifier un fichier de backup"
    echo "Usage: ./restore-db.sh [backup_file] [container_name]"
    echo "Exemple: ./restore-db.sh /backups/postgres/air_db_backup_20241201_143022.sql.gz"
    exit 1
fi

# Vérifier que le fichier de backup existe
if [ ! -f "$BACKUP_FILE" ]; then
    echo "❌ Erreur: Le fichier de backup $BACKUP_FILE n'existe pas"
    exit 1
fi

# Vérifier que le conteneur existe
if ! docker ps --format "table {{.Names}}" | grep -q "$CONTAINER_NAME"; then
    echo "❌ Erreur: Le conteneur $CONTAINER_NAME n'est pas en cours d'exécution"
    exit 1
fi

echo "⚠️  ATTENTION: Cette opération va écraser la base de données actuelle!"
echo "📁 Fichier de backup: $BACKUP_FILE"
echo "🐳 Conteneur: $CONTAINER_NAME"

read -p "Êtes-vous sûr de vouloir continuer? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Restauration annulée"
    exit 1
fi

echo "🔄 Début de la restauration..."

# Arrêter l'API pour éviter les conflits
echo "🛑 Arrêt de l'API..."
docker compose -f docker-compose.prod.yml stop api || true

# Restaurer la base de données
echo "💾 Restauration de la base de données..."
echo "🐳 Utilisation du conteneur: $CONTAINER_NAME"
gunzip -c "$BACKUP_FILE" | docker exec -i "$CONTAINER_NAME" psql -U postgres -d air_db

# Redémarrer l'API
echo "🚀 Redémarrage de l'API..."
docker compose -f docker-compose.prod.yml start api

echo "✅ Restauration terminée avec succès!"
echo "🔍 Vérifiez que l'application fonctionne correctement"
