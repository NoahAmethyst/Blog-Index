FROM node:16-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./


RUN yarn config set registry 'https://registry.npmmirror.com/'
RUN yarn install

FROM base AS builder

RUN apk update && apk add --no-cache git

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base AS runner
WORKDIR /app

COPY --from=builder /app ./

RUN yarn build


FROM registry.cn-hangzhou.aliyuncs.com/lexmargin/chatgpt-web:latest AS ChatgptWeb
WORKDIR /app

FROM nginx

WORKDIR /app

COPY --from=runner /app/dist ./
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ChatgptWeb /app/public ./public
COPY --from=ChatgptWeb /app/public/site.webmanifest ./
COPY --from=ChatgptWeb /app/.next/static ./.next/static
COPY --from=ChatgptWeb /app/.next/server ./.next/server





