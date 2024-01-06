FROM node:20.10-alpine AS build

COPY . /app
WORKDIR /app

RUN yarn install \
 && yarn run build

FROM nginx:1.25.3-alpine-slim as production

COPY --from=build /app/dist /usr/share/nginx/html
