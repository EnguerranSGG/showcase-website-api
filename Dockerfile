# === Build Stage ===
FROM node:20-slim AS builder

WORKDIR /app

# Dépendances système nécessaires à Prisma (openssl par sécurité)
RUN apt-get update && apt-get install -y openssl

# Copie et installation
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Copie du code et build
COPY . .
RUN npm run build

# === Production Stage ===
FROM node:20-slim

WORKDIR /app

# Copie uniquement ce qui est nécessaire
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

CMD ["node", "dist/main"]
