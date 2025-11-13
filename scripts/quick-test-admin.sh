#!/bin/bash

echo "=== Test rapide admin-dashboard ==="
echo ""

cd /opt/air

echo "1. Test direct depuis l'hôte vers admin-dashboard:4200 :"
docker exec admin-dashboard-prod sh -c "echo 'GET / HTTP/1.0\r\nHost: localhost\r\n\r\n' | nc -w 2 localhost 4200" 2>&1 | head -30 || echo "nc non disponible, test avec wget..."
docker exec admin-dashboard-prod wget -q -O- http://localhost:4200/ 2>&1 | head -20 || echo "wget non disponible"
echo ""

echo "2. Vérification que le port 4200 est bien exposé dans admin-dashboard :"
docker port admin-dashboard-prod
echo ""

echo "3. Test depuis nginx vers admin-dashboard avec l'IP directe :"
NGINX_CONTAINER=$(docker ps -q -f name=nginx)
ADMIN_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' admin-dashboard-prod)
echo "IP de admin-dashboard: $ADMIN_IP"
docker exec $NGINX_CONTAINER sh -c "echo 'GET / HTTP/1.0\r\nHost: admin-dashboard\r\n\r\n' | nc -w 2 $ADMIN_IP 4200" 2>&1 | head -20 || echo "nc non disponible dans nginx"
echo ""

echo "4. Logs d'erreur nginx après une requête vers /admin/ :"
echo "Faites une requête vers https://accueil-insertion-rencontre.fr/admin/ maintenant, puis appuyez sur Entrée..."
read
docker exec $NGINX_CONTAINER tail -20 /var/log/nginx/error.log 2>&1
echo ""

echo "5. Logs d'accès nginx après la requête :"
docker exec $NGINX_CONTAINER tail -10 /var/log/nginx/access.log 2>&1
echo ""

