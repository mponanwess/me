FROM node:24.20.0-slim AS build

WORKDIR /usr/src/app

COPY site/package.json site/package-lock.json ./

RUN npm ci

COPY site/ ./

RUN npm run build

FROM nginx:1.30.5-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
