FROM node:12.14.1

WORKDIR /app
EXPOSE 3000

COPY ./entrypoint /usr/local/bin

RUN chmod +x /usr/local/bin/entrypoint

ENTRYPOINT ["entrypoint"]
