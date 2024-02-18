FROM node:20-alpine as builder

WORKDIR /app

COPY package.json /app

COPY pnpm-lock.yaml  /app

RUN npm install -g pnpm && pnpm install

ADD . /app

RUN pnpm run build

FROM node:20-alpine

WORKDIR /dist

COPY --from=builder /app/.output /dist/.output

EXPOSE 3000

ENTRYPOINT  ["node", ".output/server/index.mjs"]
