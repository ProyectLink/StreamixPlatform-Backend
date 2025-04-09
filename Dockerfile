FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g pnpm && pnpm install --prod=false

COPY . .

RUN pnpm run build

FROM node:23-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
COPY .env .env

RUN npm uninstall -g pnpm

EXPOSE 3000

CMD ["node", "dist/main"]
