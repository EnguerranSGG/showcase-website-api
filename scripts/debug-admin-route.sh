#!/bin/bash

echo "=== DEBUG COMPLET Route /admin/ ==="
echo ""

cd /opt/air
NGINX_CONTAINER=$(docker ps -q -f name=nginx)

echo "1. Vérification du fichier monté dans nginx :"
docker exec $NGINX_CONTAINER ls -la /etc/nginx/nginx.conf
echo ""

echo "2. Premières lignes du fichier de config dans le conteneur :"
docker exec $NGINX_CONTAINER head -60 /etc/nginx/nginx.conf
echo ""

echo "3. Vérification que /admin/ est bien dans la config :"
docker exec $NGINX_CONTAINER grep -n "location /admin" /etc/nginx/nginx.conf
echo ""

echo "4. Configuration complète de la route /admin/ :"
docker exec $NGINX_CONTAINER sed -n '/location \/admin\//,/^[[:space:]]*}/p' /etc/nginx/nginx.conf
echo ""

echo "5. Test de la configuration nginx (mode test) :"
docker exec $NGINX_CONTAINER nginx -T 2>&1 | grep -A 30 "location /admin"
echo ""

echo "6. Logs d'erreur nginx (dernières 50 lignes) :"
docker exec $NGINX_CONTAINER tail -50 /var/log/nginx/error.log 2>&1
echo ""

echo "7. Logs d'accès nginx pour /admin (dernières 20 lignes) :"
docker exec $NGINX_CONTAINER tail -20 /var/log/nginx/access.log 2>&1 | grep -i admin || echo "Aucun accès /admin trouvé"
echo ""

echo "8. Test direct depuis nginx vers admin-dashboard avec curl (si disponible) :"
docker exec $NGINX_CONTAINER sh -c "curl -s http://admin-dashboard:4200/ | head -20" 2>&1 || echo "curl non disponible, test avec nc..."
docker exec $NGINX_CONTAINER sh -c "echo -e 'GET / HTTP/1.1\r\nHost: admin-dashboard\r\nConnection: close\r\n\r\n' | nc admin-dashboard 4200" 2>&1 | head -20 || echo "nc non disponible"
echo ""

echo "9. Vérification du serveur block HTTPS :"
docker exec $NGINX_CONTAINER grep -A 5 "listen 443" /etc/nginx/nginx.conf
echo ""

echo "10. Vérification que le server_name correspond :"
docker exec $NGINX_CONTAINER grep "server_name" /etc/nginx/nginx.conf
echo ""

echo "11. Test depuis l'extérieur (simulation) :"
echo "Test HTTP vers /admin/ :"
curl -v -k http://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -40
echo ""
echo "Test HTTPS vers /admin/ :"
curl -v -k https://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -40
echo ""

echo "12. Vérification des fichiers statiques admin-dashboard :"
docker exec admin-dashboard-prod ls -la /usr/share/nginx/html/ | head -10
echo ""

echo "13. Test direct du conteneur admin-dashboard :"
docker exec admin-dashboard-prod cat /usr/share/nginx/html/index.html | head -20
echo ""

echo "=== FIN DU DEBUG ==="

