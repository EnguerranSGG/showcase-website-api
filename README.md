Voici la version mise à jour de ton README incluant le **déploiement complet en production** avec :

* build propre,
* démarrage des containers,
* migration Prisma,
* exécution du seed.

---

# 🌐 Showcase API

Backend pour un site vitrine, construit avec **NestJS**, **PostgreSQL**, **Prisma** et **Docker**.

## 🚀 Stack technique

* **Node.js** v20
* **NestJS** avec Fastify
* **PostgreSQL** v16
* **Prisma ORM**
* **Docker / Docker Compose**
* **Swagger** (via `/api`)

---

## ✅ Prérequis

* Git installé
* Docker & Docker Compose installés

### 1. Cloner le projet

```bash
git clone https://github.com/accueil-insertion-rencontre/showcase-website-api.git
cd showcase-website-api
```

### 2. Avoir un fichier `.env` et un fichier `.env.prod` correctement configurés à la racine du projet

Tu peux générer ces fichiers automatiquement avec :

```bash
echo "DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5433/air-db" > .env
echo "JWT_ACCESS_SECRET='$(openssl rand -base64 64)'" >> .env
echo "JWT_REFRESH_SECRET='$(openssl rand -base64 64)'" >> .env
echo "NODE_ENV='development'" >> .env
echo "LOG_LEVEL='debug'" >> .env
echo "ADMIN_EMAIL=emailachanger@xyz.com" >> .env
echo "ADMIN_PASSWORD=motdepassedevotrechoix" >> .env

echo "DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5432/air-db" > .env.prod
echo "JWT_ACCESS_SECRET='$(openssl rand -base64 64)'" >> .env.prod
echo "JWT_REFRESH_SECRET='$(openssl rand -base64 64)'" >> .env.prod
echo "NODE_ENV='production'" >> .env.prod
echo "LOG_LEVEL='info'" >> .env.prod
echo "ADMIN_EMAIL=emailachanger@xyz.com" >> .env.prod
echo "ADMIN_PASSWORD=motdepassedevotrechoix" >> .env.prod
```

> ⚠️ `PRISMA_BINARY_TARGETS` doit être une chaîne JSON valide.
> ⚠️ Le fichier `.env` est **obligatoire**, même avec Docker, car les variables ne sont pas hardcodées dans l'image.

---

## 🧪 Environnement de développement

### 1. Lancer les services

```bash
docker compose build --no-cache
docker compose up
```

### 2. Appliquer les migrations et insérer les données de test

```bash
docker compose exec api npx prisma migrate deploy
docker compose exec api npm run seed
```

* API : [http://localhost:3000](http://localhost:3000)
* Swagger : [http://localhost:3000/api](http://localhost:3000/api)
* PostgreSQL : `localhost:5433`

### 3. Connexion à la base de données

* **Hôte** : `localhost`
* **Port** : `5433`
* **Utilisateur** : `air-admin`
* **Mot de passe** : `air-admin-password`
* **Base** : `air-db`

---

## 🏢 Environnement de production

### 1. Build clean + déploiement

```bash
docker compose -f docker-compose.prod.yml down -v
docker compose -f docker-compose.prod.yml build --no-cache
docker compose -f docker-compose.prod.yml up -d
```

### 2. Appliquer les migrations Prisma

```bash
docker compose -f docker-compose.prod.yml exec api npx prisma migrate deploy
```

### 3. Exécuter le script de seed

```bash
docker compose -f docker-compose.prod.yml exec api npm run seed
```

* API : [http://localhost](http://localhost)
* Swagger : [http://localhost/api](http://localhost/api)

### 4. Services inclus

* `nginx` : reverse proxy HTTP
* `api` : application NestJS optimisée, utilisateur non-root
* `db` : PostgreSQL avec volume persistant

---

## ⚙️ Variables d’environnement

En environnement Dockerisé, tout est injecté via `docker-compose.yml`. Un fichier `.env` local est requis **et** utilisé pendant le build.

### Générer un `JWT_SECRET` sécurisé

```bash
openssl rand -base64 64
```

---

## 🛠️ Spécificités techniques

* `openssl` est installé dans les conteneurs pour Prisma.
* `npx prisma generate` est exécuté **pendant** le `Dockerfile`.
* Le conteneur `api` attend la base de données (`netcat`) avant de démarrer.
* Les `binaryTargets` sont transmis dynamiquement à Prisma via ENV/ARG.
* Swagger est disponible en production via **Nginx** sur `/api`.

---

## 🔎 Logs & debug

```bash
docker compose logs -f api
```

Souhaites-tu que je génère aussi un `deploy.sh` ou `Makefile` pour automatiser tout cela ?
