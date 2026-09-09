# Commercial Landings — Showcase

Минимальный индекс 15 проектов. Полировка UI — после Hard Gate.

## Dev

```bash
# из корня commercial-landings
pnpm --filter showcase dev
# открыть http://localhost:3000/demos/commercial-landings/
```

## Build / Docker

```bash
pnpm --filter showcase build
# из portfolio-stack:
node scripts/portfolio-sync.mjs
docker compose up -d --build
# http://localhost/demos/commercial-landings/
```
