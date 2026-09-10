# Commercial Landings — Showcase

Индекс-галерея всех 15 лендингов: фильтры по industry / level, обложки с живых демо, Demo + Source.

> All brands, companies, names and business concepts shown in this project are fictional and created for portfolio demonstration purposes.

## Dev

```bash
# из корня commercial-landings
pnpm --filter showcase dev
# открыть http://localhost:3000/demos/commercial-landings/
```

Обложки тянутся с `/demos/<slug>/images/…` — нужен запущенный portfolio-stack proxy (или соседние демо).

## Build / Docker

```bash
pnpm --filter showcase build
# из portfolio-stack:
node scripts/portfolio-sync.mjs
docker compose up -d --build demo-commercial-landings proxy
# http://localhost/demos/commercial-landings/
```
