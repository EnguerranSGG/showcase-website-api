#!/bin/bash

echo "=== Diagnostic Admin Dashboard ==="
echo ""

echo "1. État des conteneurs Docker :"
cd /opt/air && docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml ps
echo ""

echo "2. Vérification du conteneur admin-dashboard :"
if docker ps | grep -q admin-dashboard; then
    echo "✅ Conteneur admin-dashboard est démarré"
    docker ps | grep admin-dashboard
else
    echo "❌ Conteneur admin-dashboard n'est PAS démarré"
fi
echo ""

echo "3. Vérification du conteneur nginx :"
NGINX_CONTAINER=$(docker ps -q -f name=nginx)
if [ -n "$NGINX_CONTAINER" ]; then
    echo "✅ Conteneur nginx est démarré (ID: $NGINX_CONTAINER)"
    docker ps | grep nginx
else
    echo "❌ Conteneur nginx n'est PAS démarré"
    exit 1
fi
echo ""

echo "4. Configuration nginx montée (premières 100 lignes) :"
docker exec $NGINX_CONTAINER cat /etc/nginx/nginx.conf | head -100
echo ""

echo "5. Test de connexion au conteneur admin-dashboard depuis nginx :"
if docker exec $NGINX_CONTAINER wget -q -O- --timeout=5 http://admin-dashboard:4200/ 2>&1 | head -20; then
    echo "✅ Connexion réussie"
else
    echo "❌ Impossible de se connecter à admin-dashboard:4200"
fi
echo ""

echo "6. Logs nginx (dernières 30 lignes) :"
cd /opt/air && docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml logs --tail=30 nginx
echo ""

echo "7. Logs admin-dashboard (dernières 30 lignes) :"
cd /opt/air && docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml logs --tail=30 admin-dashboard
echo ""

echo "8. Test de la configuration nginx :"
cd /opt/air && docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec nginx nginx -t
echo ""

echo "9. Vérification de la route /admin/ dans la config nginx :"
docker exec $NGINX_CONTAINER grep -A 10 "location /admin" /etc/nginx/nginx.conf
echo ""

echo "10. Vérification du réseau Docker :"
docker network inspect air_backend 2>/dev/null | grep -A 5 "Containers" || echo "Réseau air_backend non trouvé"
echo ""
