#!/bin/bash

echo "=== Test de la route /admin/ ==="
echo ""

cd /opt/air

NGINX_CONTAINER=$(docker ps -q -f name=nginx)

echo "1. Test direct depuis nginx vers admin-dashboard:4200 :"
docker exec $NGINX_CONTAINER sh -c "echo 'GET / HTTP/1.1\r\nHost: admin-dashboard\r\n\r\n' | nc admin-dashboard 4200" 2>&1 | head -20
echo ""

echo "2. Logs d'erreur nginx (dernières 50 lignes) :"
docker exec $NGINX_CONTAINER tail -50 /var/log/nginx/error.log 2>&1
echo ""

echo "3. Logs d'accès nginx pour /admin (dernières 20 lignes) :"
docker exec $NGINX_CONTAINER tail -20 /var/log/nginx/access.log | grep admin
echo ""

echo "4. Test de curl depuis l'extérieur vers /admin/ :"
curl -v https://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -30
echo ""

echo "5. Vérification que nginx écoute bien sur 443 :"
docker exec $NGINX_CONTAINER netstat -tlnp | grep 443 || docker exec $NGINX_CONTAINER ss -tlnp | grep 443
echo ""

echo "6. Test de la configuration nginx pour /admin/ :"
docker exec $NGINX_CONTAINER nginx -T 2>&1 | grep -A 20 "location /admin"
echo ""

