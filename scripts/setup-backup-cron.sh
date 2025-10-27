#!/bin/bash

# Script de configuration des tâches cron pour les backups automatiques
# Usage: ./setup-backup-cron.sh

set -e

echo "🔄 Configuration des tâches cron pour les backups automatiques..."

# Obtenir le chemin absolu du script de backup
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKUP_SCRIPT="$SCRIPT_DIR/backup-full.sh"

# Vérifier que le script de backup existe
if [ ! -f "$BACKUP_SCRIPT" ]; then
    echo "❌ Erreur: Le script de backup $BACKUP_SCRIPT n'existe pas"
    exit 1
fi

# Rendre le script exécutable
chmod +x "$BACKUP_SCRIPT"

# Créer le fichier de configuration cron temporaire
TEMP_CRON=$(mktemp)

# Sauvegarder la configuration cron actuelle
crontab -l 2>/dev/null > "$TEMP_CRON" || echo "# Configuration cron pour AIR Application" > "$TEMP_CRON"

# Ajouter les nouvelles tâches cron
echo "" >> "$TEMP_CRON"
echo "# === BACKUPS AUTOMATIQUES AIR APPLICATION ===" >> "$TEMP_CRON"
echo "# Backup quotidien à 2h du matin" >> "$TEMP_CRON"
echo "0 2 * * * $BACKUP_SCRIPT >> /var/log/air-backup.log 2>&1" >> "$TEMP_CRON"
echo "" >> "$TEMP_CRON"
echo "# Backup de la DB uniquement toutes les 6 heures" >> "$TEMP_CRON"
echo "0 */6 * * * $SCRIPT_DIR/backup-db.sh >> /var/log/air-backup-db.log 2>&1" >> "$TEMP_CRON"
echo "" >> "$TEMP_CRON"
echo "# Nettoyage des logs de backup (plus de 30 jours)" >> "$TEMP_CRON"
echo "0 3 * * 0 find /var/log/air-backup*.log -mtime +30 -delete" >> "$TEMP_CRON"

# Installer la nouvelle configuration cron
crontab "$TEMP_CRON"

# Nettoyer le fichier temporaire
rm "$TEMP_CRON"

echo "✅ Configuration cron installée avec succès!"
echo ""
echo "📋 Tâches configurées:"
echo "   - Backup complet quotidien à 2h00"
echo "   - Backup DB toutes les 6 heures"
echo "   - Nettoyage des logs hebdomadaire"
echo ""
echo "📁 Logs disponibles:"
echo "   - /var/log/air-backup.log (backup complet)"
echo "   - /var/log/air-backup-db.log (backup DB uniquement)"
echo ""
echo "🔍 Pour vérifier les tâches cron:"
echo "   crontab -l"
echo ""
echo "🔍 Pour voir les logs:"
echo "   tail -f /var/log/air-backup.log"
