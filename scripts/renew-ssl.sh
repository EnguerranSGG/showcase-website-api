#!/bin/bash

# Script de renouvellement SSL avec Docker pour AIR
# Usage: ./renew-ssl.sh

set -e

PROJECT_DIR="/opt/air"
DOMAIN="accueil-insertion-rencontre.fr"
NGINX_SSL_DIR="$PROJECT_DIR/nginx/ssl/live/$DOMAIN"

echo "🔄 Renouvellement des certificats SSL pour $DOMAIN"

# Vérifier que le script est exécuté en tant que root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Ce script doit être exécuté en tant que root"
    echo "Usage: sudo ./renew-ssl.sh"
    exit 1
fi

# Aller dans le répertoire du projet
cd "$PROJECT_DIR"

# Renouveler les certificats
echo "🔐 Renouvellement des certificats Let's Encrypt..."
certbot renew --quiet

# Vérifier que les nouveaux certificats existent
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "❌ Échec du renouvellement des certificats"
    exit 1
fi

# Copier les nouveaux certificats vers nginx
echo "📋 Copie des nouveaux certificats..."
cp "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" "$NGINX_SSL_DIR/"
cp "/etc/letsencrypt/live/$DOMAIN/privkey.pem" "$NGINX_SSL_DIR/"
cp "/etc/letsencrypt/live/$DOMAIN/chain.pem" "$NGINX_SSL_DIR/"

# Ajuster les permissions
chown -R root:root "$PROJECT_DIR/nginx/ssl"
chmod -R 600 "$PROJECT_DIR/nginx/ssl"

# Redémarrer nginx pour charger les nouveaux certificats
echo "🔄 Redémarrage de nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml restart nginx

# Attendre le redémarrage
sleep 10

# Vérifier que HTTPS fonctionne toujours
echo "🔍 Vérification de HTTPS..."
if curl -f -s "https://$DOMAIN" > /dev/null; then
    echo "✅ HTTPS fonctionne correctement après renouvellement"
else
    echo "❌ Problème avec HTTPS après renouvellement"
    echo "Vérifiez les logs: docker compose logs nginx"
    exit 1
fi

echo "🎉 Renouvellement SSL terminé avec succès !"
echo "📅 Prochain renouvellement: $(certbot certificates | grep -A 2 "$DOMAIN" | grep "Expiry Date" | cut -d: -f2-)"
