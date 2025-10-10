# === Build Stage ===
FROM node:20-slim AS builder

RUN addgroup --system app && adduser --system --ingroup app appuser

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma
RUN npm ci --legacy-peer-deps

ARG ADMIN_EMAIL
ARG ADMIN_PASSWORD
ARG DATABASE_URL

ENV DATABASE_URL=${DATABASE_URL}
ENV ADMIN_EMAIL=${ADMIN_EMAIL}
ENV ADMIN_PASSWORD=${ADMIN_PASSWORD}

RUN npx prisma generate

# LOGS : Vérifie ce qui est là avant le build
COPY . .
COPY .env .env

RUN echo "=== Contenu de /app avant build ===" && ls -al /app && \
    echo "=== Contenu du dossier src ===" && ls -al /app/src

RUN npm run build

RUN echo "=== Contenu de /app après build ===" && ls -al /app && \
    echo "=== Contenu de /app/dist après build ===" && ls -al /app/dist

COPY prisma/seed-files ./dist/prisma/seed-files

# === Production Stage ===
FROM node:20-slim

RUN addgroup --system app && adduser --system --ingroup app appuser

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*

COPY --chown=appuser:app --from=builder /app/.env .env
COPY --chown=appuser:app --from=builder /app/package*.json ./
COPY --chown=appuser:app --from=builder /app/node_modules ./node_modules
COPY --chown=appuser:app --from=builder /app/dist ./dist
COPY --chown=appuser:app --from=builder /app/prisma ./prisma

USER appuser

ENV NODE_ENV=production

CMD ["node", "dist/main.js"]
