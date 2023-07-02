FROM node:current-alpine3.12 as build

WORKDIR /dist/src/app

COPY ./nginx.conf .

FROM nginx:1.23.1 AS ngi

# COPY --from=build /dist/src/app/ /usr/share/nginx/web-app

# COPY /nginx.conf  /etc/nginx/conf.d/default.conf
COPY /nginx.conf  /etc/nginx/nginx.conf