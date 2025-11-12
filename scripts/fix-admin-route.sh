#!/bin/bash

echo "=== Correction de la route admin ==="
echo ""

cd /opt/air

echo "1. Arrêt de nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml stop nginx
echo ""

echo "2. Suppression du conteneur nginx..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml rm -f nginx
echo ""

echo "3. Vérification que admin-dashboard est sur le réseau backend..."
docker network inspect air_backend | grep -A 3 "admin-dashboard" || echo "⚠️ admin-dashboard non trouvé sur le réseau"
echo ""

echo "4. Redémarrage de nginx avec la bonne configuration réseau..."
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml up -d nginx
echo ""

echo "5. Attente du démarrage de nginx..."
sleep 5
echo ""

echo "6. Test de résolution DNS depuis nginx..."
NGINX_CONTAINER=$(docker ps -q -f name=nginx)
if [ -n "$NGINX_CONTAINER" ]; then
    echo "Test de résolution de admin-dashboard..."
    docker exec $NGINX_CONTAINER getent hosts admin-dashboard || echo "❌ admin-dashboard non résolu"
    echo ""
    echo "Test de connexion à admin-dashboard:4200..."
    if docker exec $NGINX_CONTAINER wget -q -O- --timeout=5 http://admin-dashboard:4200/ 2>&1 | head -5; then
        echo "✅ Connexion réussie !"
    else
        echo "❌ Connexion échouée"
    fi
else
    echo "❌ Conteneur nginx non trouvé"
fi
echo ""

echo "7. État final des conteneurs :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml ps
echo ""

echo "=== Correction terminée ==="

