FROM node:24-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate
WORKDIR /app

# --- Install dependencies ---
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY artifacts/api-server/package.json artifacts/api-server/
COPY artifacts/rayvpn-routers/package.json artifacts/rayvpn-routers/
COPY artifacts/mockup-sandbox/package.json artifacts/mockup-sandbox/
COPY lib/api-zod/package.json lib/api-zod/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY lib/api-spec/package.json lib/api-spec/
COPY lib/db/package.json lib/db/
COPY scripts/package.json scripts/
ENV CI=true
RUN pnpm install --frozen-lockfile

# --- Build ---
FROM deps AS build
COPY . .
ENV NODE_ENV=production
ENV PORT=3000
ENV BASE_PATH=/
RUN pnpm --filter @workspace/rayvpn-routers run build
RUN pnpm --filter @workspace/api-server run build

# --- Production image with nginx + node ---
FROM node:24-alpine AS production
RUN apk add --no-cache nginx supervisor

WORKDIR /app

# Copy API server bundle
COPY --from=build /app/artifacts/api-server/dist ./api-server/

# Copy frontend static files
COPY --from=build /app/artifacts/rayvpn-routers/dist/public /usr/share/nginx/html

# Nginx config
COPY <<'NGINX' /etc/nginx/http.d/default.conf
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    location /api/ {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX

# Supervisor config to run both nginx and node
COPY <<'SUPERVISOR' /etc/supervisord.conf
[supervisord]
nodaemon=true
logfile=/dev/stdout
logfile_maxbytes=0
pidfile=/var/run/supervisord.pid

[program:nginx]
command=nginx -g "daemon off;"
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0

[program:api]
command=node --enable-source-maps /app/api-server/index.mjs
autostart=true
autorestart=true
environment=PORT="8080",NODE_ENV="production"
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0
SUPERVISOR

EXPOSE 80

CMD ["supervisord", "-c", "/etc/supervisord.conf"]
