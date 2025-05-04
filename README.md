# 🌐 Showcase API

Backend pour un site vitrine, construit avec **NestJS**, **PostgreSQL**, **Prisma** et **Docker**.

## 🚀 Stack technique

- **Node.js** v20
- **NestJS** avec Fastify
- **PostgreSQL** v16
- **Prisma ORM**
- **Docker / Docker Compose**
- **Swagger** (via `/api`)

---

## 🌳 Environnement de développement

### 1. Prérequis

- Docker & Docker Compose installés

### 2. Cloner le projet

```bash
git clone https://github.com/accueil-insertion-rencontre/showcase-website-api.git
cd showcase-api
````

### 3. Démarrer les services en dev

```bash
docker-compose up --build
```

* API : [http://localhost:3000](http://localhost:3000)
* Swagger : [http://localhost:3000/api](http://localhost:3000/api)
* PostgreSQL : `localhost:5433`

### 4. Connexion à la base (via client type DBeaver, TablePlus…)

* **Hôte** : `localhost`
* **Port** : `5433`
* **Utilisateur** : `air-admin`
* **Mot de passe** : `air-admin-password`
* **Base** : `air-db`

### 5. Prisma (migrations / introspection)

#### Générer le client Prisma

```bash
docker exec -it showcase-api npx prisma generate
```

#### Créer une migration

```bash
docker exec -it showcase-api npx prisma migrate dev --name <nom>
```

> ⚠️ Les variables comme `PRISMA_BINARY_TARGETS` sont injectées automatiquement via `docker-compose.yml`.<br>
> Si tu exécutes Prisma **hors Docker**, pense à les définir dans un fichier `.env`.

## 🏢 Environnement de production

### 1. Prérequis

* Docker & Docker Compose

### 2. Lancer en production

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

* API : [http://localhost](http://localhost)
* Swagger : [http://localhost/api](http://localhost/api)

### 3. Services déployés

* `nginx` : reverse proxy HTTP
* `api` : application NestJS optimisée
* `db` : PostgreSQL avec volume persistant

---

## ⚙️ Variables d’environnement

Aucune `.env` nécessaire en environnement Dockerisé — tout est injecté par `docker-compose`.

### Exemple `.env` pour un usage local (hors Docker) :

```dotenv
DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5433/air-db
PRISMA_BINARY_TARGETS=["native"]
```

> ⚠️ `PRISMA_BINARY_TARGETS` doit être une chaîne JSON valide.

---

## 🛡️ Notes techniques

* `openssl` est installé dans l’image Docker pour Prisma.
* `npx prisma generate` est exécuté durant le build Docker.
* Le conteneur `api` applique automatiquement les migrations (`migrate deploy`) au démarrage.
* Swagger est exposé en `/api` grâce à **Nginx** en production.

---

## 🔎 Debug / logs

```bash
docker-compose logs -f api
```



