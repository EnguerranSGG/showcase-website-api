# 🌐 Showcase API

API backend pour un site vitrine, construite avec **NestJS**, **PostgreSQL**, **Docker** et **Prisma**.

## 🚀 Stack technique

- **Node.js** v20
- **NestJS** avec Fastify
- **PostgreSQL** v16
- **Prisma ORM**
- **Docker / Docker Compose**

---

## 🌳 Environnement de développement

### 1. Prérequis

- Docker & Docker Compose installés

### 2. Récupération du projet

```bash
git clone <url-du-depot>
cd showcase-api
```

### 3. Lancement en développement

```bash
docker-compose up --build
```

- L’API est disponible sur [http://localhost:3000](http://localhost:3000)
- PostgreSQL écoute sur `localhost:5433`

### 4. Accès à la base de données

Utilise un client comme DBeaver ou TablePlus avec les infos suivantes :

- Hôte : `localhost`
- Port : `5433`
- Utilisateur : `air-admin`
- Mot de passe : `air-admin-password`
- Base : `air-db`

### 5. Prisma (optionnel si besoin de migrations)

```bash
docker exec -it showcase-api npx prisma migrate dev
```

---

## 🏢 Environnement de production

### 1. Prérequis

- Docker & Docker Compose

### 2. Lancement de l’API en production

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

- Le serveur sera exposé sur [http://localhost](http://localhost) via **nginx**

### 3. Accès à Swagger

```txt
http://localhost/api
```

### 4. Composition production

- `nginx`: sert le reverse proxy
- `api`: build optimisé NestJS
- `db`: base PostgreSQL persistante

---

## ⚙️ Variables d'environnement

Pas besoin de `.env` local car les variables sont injectées directement via `docker-compose`. Si besoin de personnalisation locale, ajoute un fichier `.env` avec :

```dotenv
DATABASE_URL=postgresql://air-admin:air-admin-password@localhost:5433/air-db
```

Et modifie la configuration NestJS/Prisma en conséquence.

---

## 🛡️ Notes

- Le build production inclut `openssl` pour Prisma.
- Prisma doit être généré dans le `Dockerfile` (fait via `npx prisma generate`).
- Swagger est exposé via Nginx sur `/api`.

