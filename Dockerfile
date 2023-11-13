FROM nginx:1.25.3-alpine
RUN mkdir /usr/share/nginx/html/orlandos-adventure
COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./orlandos-adventure /usr/share/nginx/html/orlandos-adventure