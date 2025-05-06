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

### 2. Avoir un fichier `.env` correctement configuré à la racine du projet

Tu peux générer ce fichier automatiquement avec :

```bash
echo "DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5433/air-db" > .env
echo "PRISMA_BINARY_TARGETS=[\"native\"]" >> .env
echo "JWT_SECRET='$(openssl rand -base64 64)'" >> .env
```

> ⚠️ `PRISMA_BINARY_TARGETS` doit être une chaîne JSON valide (ex : `["native"]`, `["linux-arm64-openssl-1.1.x"]`).
>
> ⚠️ Le fichier `.env` est **obligatoire**, même avec Docker, car les variables ne sont pas hardcodées dans l'image.

---

### 2. Lancer l’environnement de développement

```bash
docker compose up --build
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

### 4. Prisma (migrations / introspection)

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

En environnement Dockerisé, tout est injecté via `docker-compose.yml`. Toutefois, un fichier `.env` est requis localement **et** utilisé par Docker.

### Générer un `JWT_SECRET` sécurisé

Utilise cette commande pour générer une clé aléatoire :

```bash
openssl rand -base64 64
```

> 📌 Copie-colle la sortie dans ton fichier `.env` :
>
> ```dotenv
> JWT_SECRET=vraimentlonguetresaleatoire...
> ```

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
