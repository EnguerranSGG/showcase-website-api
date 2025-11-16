#!/bin/bash

echo "=== Diagnostic de la connexion admin ==="
echo ""

cd /opt/air

echo "1. Vérification des variables d'environnement ADMIN_EMAIL et ADMIN_PASSWORD :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec -T api sh -c 'echo "ADMIN_EMAIL=$ADMIN_EMAIL" && echo "ADMIN_PASSWORD=${ADMIN_PASSWORD:0:3}***"' 2>&1 || echo "⚠️ Impossible de récupérer les variables d'environnement"
echo ""

echo "2. Vérification si un utilisateur admin existe dans la base de données :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec -T api node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    console.log('Recherche de l\\'admin avec l\\'email:', adminEmail);
    const admin = await prisma.user.findUnique({
      where: { mail: adminEmail },
      select: { user_id: true, mail: true, role: true, firstname: true, lastname: true }
    });
    if (admin) {
      console.log('✅ Admin trouvé:', JSON.stringify(admin, null, 2));
    } else {
      console.log('❌ Aucun admin trouvé avec cet email');
    }
    const allAdmins = await prisma.user.findMany({
      where: { role: 'ADMIN' },
      select: { user_id: true, mail: true, role: true }
    });
    console.log('Tous les admins dans la base:', JSON.stringify(allAdmins, null, 2));
  } catch (error) {
    console.error('Erreur:', error.message);
  } finally {
    await prisma.\$disconnect();
  }
})();
" 2>&1
echo ""

echo "3. Test de connexion à l'API depuis l'intérieur du conteneur :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec -T api sh -c '
ADMIN_EMAIL=$ADMIN_EMAIL
ADMIN_PASSWORD=$ADMIN_PASSWORD
curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"mail\": \"$ADMIN_EMAIL\", \"password\": \"$ADMIN_PASSWORD\"}" | head -20
' 2>&1 || echo "⚠️ Erreur lors du test de connexion"
echo ""

echo "4. Test de connexion à l'API depuis l'extérieur (via HTTPS) :"
ADMIN_EMAIL=$(docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml exec -T api sh -c 'echo $ADMIN_EMAIL' | tr -d '\r\n')
echo "Email utilisé: $ADMIN_EMAIL"
echo "Test avec curl (vous devrez entrer le mot de passe manuellement) :"
echo "curl -X POST https://accueil-insertion-rencontre.fr/api/auth/login -H 'Content-Type: application/json' -d '{\"mail\": \"$ADMIN_EMAIL\", \"password\": \"VOTRE_MOT_DE_PASSE\"}'"
echo ""

echo "5. Logs de l'API (dernières 50 lignes) :"
docker compose -f docker-compose.prod.yml -f docker-compose.override.prod.yml logs --tail 50 api | grep -i -E "(login|auth|error|admin)" || echo "Aucun log pertinent trouvé"
echo ""

echo "6. Vérification de la santé de l'API :"
curl -s https://accueil-insertion-rencontre.fr/api/health | head -5 || echo "❌ API non accessible"
echo ""

echo "7. Test de la route /api/auth/login (sans credentials) :"
curl -s -X POST https://accueil-insertion-rencontre.fr/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"mail": "test@test.com", "password": "test"}' | head -10
echo ""

echo "=== FIN DU DIAGNOSTIC ==="

