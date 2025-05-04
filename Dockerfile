# === Build Stage ===
FROM node:20-slim AS builder

WORKDIR /app

# Dépendances système pour Prisma
RUN apt-get update && apt-get install -y openssl

# Dépendances applicatives
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Code source
COPY . .
RUN npm run build

# === Production Stage ===
FROM node:20-slim

WORKDIR /app

# Dépendances système au runtime
RUN apt-get update && apt-get install -y openssl

# Copier uniquement ce qui est nécessaire au runtime
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Re-générer le client Prisma pour assurer la compatibilité native (optionnel mais utile)
RUN npx prisma generate

# Lancer l'API
CMD ["node", "dist/main.js"]
