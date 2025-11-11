#!/bin/bash

echo "=== DIAGNOSTIC ADMIN DASHBOARD ==="
echo ""

echo "1. Vérification des conteneurs Docker"
echo "-----------------------------------"
docker ps --filter "name=admin-dashboard" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""

echo "2. Vérification du réseau Docker"
echo "-----------------------------------"
docker network inspect air_backend 2>/dev/null | grep -A 5 "admin-dashboard" || echo "Conteneur admin-dashboard non trouvé dans le réseau"
echo ""

echo "3. Test de connexion au conteneur admin-dashboard"
echo "-----------------------------------"
docker exec admin-dashboard-prod curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:4200/ 2>/dev/null || echo "Impossible de se connecter au conteneur"
echo ""

echo "4. Vérification de la configuration nginx externe"
echo "-----------------------------------"
grep -A 10 "location /admin/" /opt/air/nginx/nginx-ssl.conf 2>/dev/null || echo "Fichier nginx-ssl.conf non trouvé"
echo ""

echo "5. Test depuis nginx vers admin-dashboard"
echo "-----------------------------------"
docker exec nginx-prod curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://admin-dashboard:4200/ 2>/dev/null || echo "Nginx ne peut pas accéder à admin-dashboard"
echo ""

echo "6. Vérification des logs nginx"
echo "-----------------------------------"
docker logs nginx-prod --tail 20 2>&1 | grep -i "admin" || echo "Aucun log admin trouvé"
echo ""

echo "7. Vérification des logs admin-dashboard"
echo "-----------------------------------"
docker logs admin-dashboard-prod --tail 20 2>&1 | head -10
echo ""

echo "8. Vérification du contenu du conteneur admin-dashboard"
echo "-----------------------------------"
docker exec admin-dashboard-prod ls -la /usr/share/nginx/html/ | head -10
echo ""

echo "9. Vérification de l'index.html"
echo "-----------------------------------"
docker exec admin-dashboard-prod cat /usr/share/nginx/html/index.html 2>/dev/null | grep -i "base href" || echo "index.html non trouvé ou base href non présent"
echo ""

echo "=== FIN DU DIAGNOSTIC ==="

