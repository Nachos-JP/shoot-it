FROM node:13.5.0

WORKDIR /usr/src/shoot-it

RUN apt-get update && \
  apt-get install -y git && \
  npm install -g firebase-tools
