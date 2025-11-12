#!/bin/bash

echo "=== Correction immédiate de la route /admin/ ==="
echo ""

cd /opt/air

echo "1. Vérification de la configuration actuelle dans nginx-ssl.conf :"
grep -A 3 "location /admin/" nginx/nginx-ssl.conf | head -5
echo ""

echo "2. Arrêt de nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml stop nginx
echo ""

echo "3. Suppression du conteneur nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml rm -f nginx
echo ""

echo "4. Vérification que le fichier nginx-ssl.conf utilise admin-dashboard (pas admin-dashboard-prod) :"
if grep -q "proxy_pass http://admin-dashboard:4200" nginx/nginx-ssl.conf; then
    echo "✅ Configuration correcte (utilise admin-dashboard)"
else
    echo "❌ Configuration incorrecte, correction en cours..."
    sed -i 's|proxy_pass http://admin-dashboard-prod:4200|proxy_pass http://admin-dashboard:4200|g' nginx/nginx-ssl.conf
    echo "✅ Configuration corrigée"
fi
echo ""

echo "5. Test de la configuration nginx..."
docker run --rm -v /opt/air/nginx/nginx-ssl.conf:/etc/nginx/nginx.conf:ro nginx:1.28 nginx -t 2>&1
echo ""

echo "6. Redémarrage de nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml up -d nginx
echo ""

echo "7. Attente du démarrage..."
sleep 5
echo ""

echo "8. Rechargement de la configuration nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec nginx nginx -s reload 2>&1 || echo "⚠️ Rechargement ignoré (démarrage frais)"
echo ""

echo "9. Test de la résolution depuis nginx..."
NGINX_CONTAINER=$(docker ps -q -f name=nginx)
docker exec $NGINX_CONTAINER getent hosts admin-dashboard
echo ""

echo "10. Vérification finale de la configuration dans le conteneur nginx :"
docker exec $NGINX_CONTAINER grep -A 3 "location /admin/" /etc/nginx/nginx.conf | head -5
echo ""

echo "=== Correction terminée ==="
echo ""
echo "Testez maintenant : https://accueil-insertion-rencontre.fr/admin/"

