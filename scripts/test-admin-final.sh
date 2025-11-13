#!/bin/bash

echo "=== Test final de la route /admin/ ==="
echo ""

cd /opt/air
NGINX_CONTAINER=$(docker ps -q -f name=nginx)

echo "1. Logs d'erreur nginx COMPLETS (toutes les lignes) :"
docker exec $NGINX_CONTAINER cat /var/log/nginx/error.log 2>&1
echo ""

echo "2. Logs d'accès nginx pour /admin (toutes les lignes) :"
docker exec $NGINX_CONTAINER cat /var/log/nginx/access.log 2>&1 | grep -i admin || echo "Aucun accès /admin trouvé"
echo ""

echo "3. Test avec curl depuis nginx (si disponible) :"
docker exec $NGINX_CONTAINER sh -c "curl -v http://admin-dashboard:4200/ 2>&1" | head -40 || echo "curl non disponible"
echo ""

echo "4. Vérification que le conteneur admin-dashboard répond :"
docker exec admin-dashboard-prod sh -c "cat /usr/share/nginx/html/index.html" | head -30
echo ""

echo "5. Test direct depuis l'hôte vers admin-dashboard:4200 :"
docker exec admin-dashboard-prod sh -c "echo 'GET / HTTP/1.1\r\nHost: localhost\r\n\r\n' | nc localhost 4200" 2>&1 | head -20 || echo "nc non disponible dans admin-dashboard"
echo ""

echo "6. Vérification de la configuration nginx complète pour le serveur HTTPS :"
docker exec $NGINX_CONTAINER nginx -T 2>&1 | grep -A 200 "listen 443"
echo ""

echo "7. Test de requête simulée vers /admin/ :"
echo "Simulation d'une requête HTTP vers /admin/..."
docker exec $NGINX_CONTAINER sh -c "echo 'GET /admin/ HTTP/1.1\r\nHost: accueil-insertion-rencontre.fr\r\n\r\n' > /tmp/test_request.txt && cat /tmp/test_request.txt" 2>&1
echo ""

echo "8. Vérification des fichiers dans /etc/nginx/conf.d/ :"
docker exec $NGINX_CONTAINER ls -la /etc/nginx/conf.d/ 2>&1
echo ""

echo "9. Contenu de /etc/nginx/conf.d/default.conf (si existe) :"
docker exec $NGINX_CONTAINER cat /etc/nginx/conf.d/default.conf 2>&1 || echo "Fichier n'existe pas ou est vide (bon signe)"
echo ""

echo "10. Test depuis l'extérieur avec curl :"
curl -v -k https://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -50
echo ""

