#!/bin/bash

echo "=== Diagnostic complet Admin Dashboard ==="
echo ""

cd /opt/air
NGINX_CONTAINER=$(docker ps -q -f name=nginx)

if [ -z "$NGINX_CONTAINER" ]; then
    echo "❌ Conteneur nginx non trouvé"
    exit 1
fi

echo "1. État des conteneurs :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml ps
echo ""

echo "2. Vérification que admin-dashboard est démarré :"
if docker ps | grep -q admin-dashboard; then
    echo "✅ admin-dashboard est démarré"
    docker ps | grep admin-dashboard
else
    echo "❌ admin-dashboard n'est PAS démarré"
fi
echo ""

echo "3. Test de connexion directe depuis nginx vers admin-dashboard:4200 :"
timeout 10 docker exec $NGINX_CONTAINER sh -c "wget -q -O- --timeout=5 http://admin-dashboard:4200/ 2>&1" | head -30 || echo "❌ Connexion échouée ou timeout"
echo ""

echo "4. Vérification du fichier de config monté dans nginx :"
timeout 5 docker exec $NGINX_CONTAINER ls -la /etc/nginx/nginx.conf 2>&1 || echo "⚠️ Timeout"
echo ""

echo "5. Premières lignes du fichier de config dans le conteneur :"
timeout 5 docker exec $NGINX_CONTAINER sh -c "head -60 /etc/nginx/nginx.conf 2>&1" || echo "⚠️ Timeout"
echo ""

echo "6. Vérification de /etc/nginx/conf.d/default.conf :"
timeout 5 docker exec $NGINX_CONTAINER sh -c "cat /etc/nginx/conf.d/default.conf 2>&1" | head -20 || echo "✅ Fichier vide ou inexistant (bon signe)"
echo ""

echo "7. Liste des fichiers dans /etc/nginx/conf.d/ :"
timeout 5 docker exec $NGINX_CONTAINER ls -la /etc/nginx/conf.d/ 2>&1 || echo "⚠️ Timeout"
echo ""

echo "8. Configuration nginx testée (nginx -T) - recherche de 'default_server' :"
timeout 15 docker exec $NGINX_CONTAINER sh -c "nginx -T 2>&1" | grep -B 5 -A 5 "default_server" || echo "Aucun default_server trouvé"
echo ""

echo "9. Tous les serveurs qui écoutent sur 443 :"
timeout 15 docker exec $NGINX_CONTAINER sh -c "nginx -T 2>&1" | grep -B 10 "listen 443" || echo "Aucun serveur 443 trouvé"
echo ""

echo "10. Configuration complète de location /admin/ :"
timeout 15 docker exec $NGINX_CONTAINER sh -c "nginx -T 2>&1" | grep -B 5 -A 20 "location /admin" || echo "location /admin/ non trouvé"
echo ""

echo "11. Logs d'erreur nginx (dernières 50 lignes) :"
# Lire seulement les derniers bytes du fichier pour éviter de bloquer
timeout 10 docker exec $NGINX_CONTAINER sh -c "if [ -f /var/log/nginx/error.log ]; then tail -c 5000 /var/log/nginx/error.log 2>&1 | tail -30; else echo 'Fichier non trouvé'; fi" || echo "⚠️ Timeout ou erreur lors de la lecture"
echo ""

echo "12. Logs d'accès pour /admin/ (dernières 20 lignes) :"
timeout 10 docker exec $NGINX_CONTAINER sh -c "if [ -f /var/log/nginx/access.log ]; then tail -c 10000 /var/log/nginx/access.log 2>&1 | grep -i admin | tail -20; else echo 'Fichier non trouvé'; fi" || echo "Aucun accès /admin/ trouvé"
echo ""

echo "13. Test depuis l'extérieur (curl vers /admin/) :"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -k https://accueil-insertion-rencontre.fr/admin/ 2>&1 || echo "000")
echo "Code HTTP: $HTTP_CODE"
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Accès réussi"
elif [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo "⚠️ Redirection détectée"
    curl -s -I -k https://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -10
elif [ "$HTTP_CODE" = "404" ]; then
    echo "❌ 404 Not Found"
elif [ "$HTTP_CODE" = "502" ] || [ "$HTTP_CODE" = "503" ] || [ "$HTTP_CODE" = "504" ]; then
    echo "❌ Erreur de proxy ($HTTP_CODE)"
else
    echo "❌ Code inattendu: $HTTP_CODE"
fi
echo ""

echo "14. Contenu de la réponse HTTP complète :"
curl -s -k https://accueil-insertion-rencontre.fr/admin/ 2>&1 | head -30
echo ""

echo "15. Vérification du réseau Docker :"
timeout 5 docker network inspect air_backend 2>&1 | grep -A 3 "admin-dashboard" || echo "admin-dashboard non trouvé sur le réseau"
echo ""

echo "16. Résolution DNS depuis nginx :"
timeout 5 docker exec $NGINX_CONTAINER getent hosts admin-dashboard || echo "❌ admin-dashboard non résolu"
echo ""

echo "=== FIN DU DIAGNOSTIC ==="

