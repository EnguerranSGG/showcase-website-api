#!/bin/bash

echo "=== Test direct de la connexion admin-dashboard ==="
echo ""

cd /opt/air
NGINX_CONTAINER=$(docker ps -q -f name=nginx)

echo "1. Test de résolution DNS depuis nginx :"
docker exec $NGINX_CONTAINER getent hosts admin-dashboard
echo ""

echo "2. Test de connexion TCP vers admin-dashboard:4200 :"
docker exec $NGINX_CONTAINER sh -c "timeout 3 nc -zv admin-dashboard 4200" 2>&1
echo ""

echo "3. Test HTTP direct vers admin-dashboard:4200 :"
docker exec $NGINX_CONTAINER sh -c "echo -e 'GET / HTTP/1.1\r\nHost: admin-dashboard\r\nConnection: close\r\n\r\n' | nc admin-dashboard 4200" 2>&1 | head -30
echo ""

echo "4. Test avec l'IP directe (si résolution fonctionne) :"
ADMIN_IP=$(docker exec $NGINX_CONTAINER getent hosts admin-dashboard | awk '{print $1}')
if [ -n "$ADMIN_IP" ]; then
    echo "IP résolue: $ADMIN_IP"
    docker exec $NGINX_CONTAINER sh -c "timeout 3 nc -zv $ADMIN_IP 4200" 2>&1
else
    echo "❌ Impossible de résoudre admin-dashboard"
fi
echo ""

echo "5. Vérification que nginx peut se connecter (test proxy_pass simulé) :"
docker exec $NGINX_CONTAINER sh -c "echo 'GET / HTTP/1.0' | nc admin-dashboard 4200" 2>&1 | head -20
echo ""

echo "6. Logs d'erreur nginx en temps réel (pendant 5 secondes) :"
echo "Faites une requête vers /admin/ maintenant..."
timeout 5 docker exec $NGINX_CONTAINER tail -f /var/log/nginx/error.log 2>&1 || true
echo ""

