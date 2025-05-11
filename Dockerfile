# === Build Stage ===
FROM node:20-slim AS builder

# Crée un utilisateur non-root
RUN addgroup --system app && adduser --system --ingroup app appuser

WORKDIR /app

# Dépendances système pour Prisma
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*

# Copie et installation des dépendances applicatives
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci

# Génération Prisma client une seule fois ici (pas besoin en prod si généré ici)
ARG ADMIN_EMAIL
ARG ADMIN_PASSWORD
ARG DATABASE_URL_DOCKER

ENV DATABASE_URL=${DATABASE_URL}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}

RUN npx prisma generate

# Copie du reste du code source et build
COPY . .
COPY .env .env
RUN npm run build

# === Production Stage ===
FROM node:20-slim

# Crée le même utilisateur non-root
RUN addgroup --system app && adduser --system --ingroup app appuser

WORKDIR /app

# Dépendances système au runtime
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*

# Copier uniquement ce qui est nécessaire au runtime
COPY --chown=appuser:app --from=builder /app/.env .env
COPY --chown=appuser:app --from=builder /app/package*.json ./
COPY --chown=appuser:app --from=builder /app/node_modules ./node_modules
COPY --chown=appuser:app --from=builder /app/dist ./dist
COPY --chown=appuser:app --from=builder /app/prisma ./prisma

# Utilisateur non-root
USER appuser

# Lancer l'API
CMD ["node", "dist/main.js"]

