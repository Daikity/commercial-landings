# Шаблон Dockerfile для apps/<slug>
# Сборка из корня monorepo (context: commercial-landings, dockerfile: apps/<slug>/Dockerfile)
# Либо context: apps/<slug> при self-contained package.json без workspace deps

FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

COPY . .
# NEXT_PUBLIC / basePath задаются в next.config.ts
RUN pnpm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
