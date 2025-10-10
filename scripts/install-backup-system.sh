#!/bin/bash

# Script d'installation complet du système de backup pour AIR Application
# Usage: ./install-backup-system.sh

set -e

echo "🚀 Installation du système de backup pour AIR Application..."
echo "=========================================================="

# Vérifier que nous sommes root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Erreur: Ce script doit être exécuté en tant que root"
    exit 1
fi

# Configuration
BACKUP_DIR="/backups/air-app"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📁 Création des répertoires de backup..."
mkdir -p "$BACKUP_DIR"
mkdir -p "/var/log"

echo "🔧 Configuration des permissions..."
chmod +x "$SCRIPT_DIR"/*.sh

echo "📦 Installation du service systemd..."

# Copier les fichiers de service
cp "$SCRIPT_DIR/air-backup.service" /etc/systemd/system/
cp "$SCRIPT_DIR/air-backup.timer" /etc/systemd/system/

# Recharger systemd
systemctl daemon-reload

# Activer le timer
systemctl enable air-backup.timer
systemctl start air-backup.timer

echo "⏰ Configuration des tâches cron..."
"$SCRIPT_DIR/setup-backup-cron.sh"

echo "🧪 Test du système de backup..."
echo "Test de backup de la base de données..."

# Test simple du backup DB
if docker ps --format "table {{.Names}}" | grep -q "showcase-api-db"; then
    echo "✅ Conteneur de base de données trouvé"
    "$SCRIPT_DIR/backup-db.sh" > /dev/null 2>&1 && echo "✅ Test de backup réussi" || echo "⚠️  Test de backup échoué (normal si pas de conteneur en cours)"
else
    echo "⚠️  Aucun conteneur de base de données trouvé (normal si l'app n'est pas démarrée)"
fi

echo ""
echo "🎉 Installation terminée avec succès!"
echo ""
echo "📋 Récapitulatif:"
echo "   ✅ Répertoire de backup: $BACKUP_DIR"
echo "   ✅ Service systemd: air-backup.service"
echo "   ✅ Timer systemd: air-backup.timer (backup quotidien à 2h00)"
echo "   ✅ Tâches cron configurées"
echo ""
echo "🔧 Commandes utiles:"
echo "   - Vérifier le statut du timer: systemctl status air-backup.timer"
echo "   - Forcer un backup: systemctl start air-backup.service"
echo "   - Voir les logs: journalctl -u air-backup.service"
echo "   - Backup manuel: $SCRIPT_DIR/backup-full.sh"
echo "   - Restauration: $SCRIPT_DIR/restore-db.sh [fichier_backup]"
echo ""
echo "📁 Les backups seront stockés dans: $BACKUP_DIR"
echo "📝 Les logs seront dans: /var/log/air-backup*.log"
