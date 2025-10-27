#!/bin/bash

# Script pour récupérer les clés SSH du VPS
# Usage: ./get-ssh-keys.sh [user] [host]

USER=${1:-"github-actions"}
HOST=${2:-"your-vps-ip"}

echo "🔑 Récupération des clés SSH depuis le VPS"
echo "👤 Utilisateur: $USER"
echo "🌐 Host: $HOST"
echo ""

echo "📋 Clé publique (à ajouter dans ~/.ssh/authorized_keys si nécessaire):"
echo "=========================================="
ssh $USER@$HOST "cat ~/.ssh/id_rsa.pub"
echo "=========================================="
echo ""

echo "🔐 Clé privée (à ajouter dans GitHub Secrets):"
echo "=========================================="
ssh $USER@$HOST "cat ~/.ssh/id_rsa"
echo "=========================================="
echo ""

echo "📝 Instructions:"
echo "1. Copiez la clé privée ci-dessus"
echo "2. Allez dans GitHub > Settings > Secrets and variables > Actions"
echo "3. Ajoutez ces secrets:"
echo "   - PRODUCTION_SSH_KEY: [clé privée]"
echo "   - STAGING_SSH_KEY: [même clé privée]"
echo "   - PRODUCTION_USER: $USER"
echo "   - PRODUCTION_HOST: $HOST"
echo "   - STAGING_USER: $USER"
echo "   - STAGING_HOST: $HOST"
