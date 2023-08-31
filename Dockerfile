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



FROM nginx

WORKDIR /app

ENV UPDATE=3

# Copy chatgpt web resource
COPY --from=ChatgptWeb /app/public ./public
#COPY --from=ChatgptWeb /app/.next/standalone ./
COPY --from=ChatgptWeb /app/.next/static ./.next/static
COPY --from=ChatgptWeb /app/.next/server ./.next/server
COPY --from=ChatgptWeb /app/.next/static ./_next/static
COPY --from=ChatgptWeb /app/.next/server ./_next/server
COPY --from=ChatgptWeb /app/.next/server ./_next/server
COPY --from=ChatgptWeb /app/.next/static ./static
COPY --from=ChatgptWeb /app/public ./


COPY --from=runner /app/dist ./
COPY --from=runner /app/public/* ./public
COPY nginx.conf /etc/nginx/nginx.conf





