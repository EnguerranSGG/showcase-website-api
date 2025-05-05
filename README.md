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

## 🌳 Environnement de développement

### 1. Prérequis

* Docker & Docker Compose installés

### 2. Cloner le projet

```bash
git clone https://github.com/accueil-insertion-rencontre/showcase-website-api.git
cd showcase-website-api
```

### 3. Lancer l’environnement de développement

```bash
docker compose up --build
```

* API : [http://localhost:3000](http://localhost:3000)
* Swagger : [http://localhost:3000/api](http://localhost:3000/api)
* PostgreSQL : `localhost:5433`

### 4. Connexion à la base de données

* **Hôte** : `localhost`
* **Port** : `5433`
* **Utilisateur** : `air-admin`
* **Mot de passe** : `air-admin-password`
* **Base** : `air-db`

### 5. Prisma (migrations / introspection)

> Utilise Prisma uniquement via Docker, sauf si tu as correctement défini `PRISMA_BINARY_TARGETS` pour ta plateforme.

#### Générer le client Prisma

```bash
docker compose exec api npx prisma generate
```

#### Créer une migration

```bash
docker compose exec api npx prisma migrate dev --name <nom>
```

---

## 🏢 Environnement de production

### 1. Prérequis

* Docker & Docker Compose installés
* Plateforme compatible (Mac Apple Silicon ou Linux)

### 2. Déploiement de la base + migrations

```bash
docker compose -f docker-compose.prod.yml run --rm api npx prisma migrate deploy
```

> Cela permet d’appliquer les migrations **avant** le lancement de l’environnement prod.

### 3. Lancer les services en production

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

* API : [http://localhost](http://localhost)
* Swagger : [http://localhost/api](http://localhost/api)

### 4. Services inclus

* `nginx` : reverse proxy HTTP
* `api` : application NestJS optimisée, utilisateur non-root
* `db` : PostgreSQL avec volume persistant

---

## ⚙️ Variables d’environnement

En environnement Dockerisé, tout est injecté via `docker-compose.yml`.

### Exemple `.env` (uniquement pour usage local hors Docker)

```dotenv
DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5433/air-db
PRISMA_BINARY_TARGETS=["native"]
```

> ⚠️ `PRISMA_BINARY_TARGETS` doit être une chaîne JSON valide (ex : `["native"]`, `["linux-arm64-openssl-1.1.x"]`...).

---

## 🛠️ Spécificités techniques

* `openssl` est installé dans les conteneurs pour la compatibilité Prisma.
* `npx prisma generate` est exécuté **durant le build Docker**.
* Le conteneur `api` attend la base via `netcat` avant de démarrer.
* Les `binaryTargets` sont gérés dynamiquement via `ARG` + `ENV` dans le `Dockerfile`.
* Swagger est exposé via **Nginx** sur `/api`.

---

## 🔎 Logs & debug

```bash
docker compose logs -f api
```


