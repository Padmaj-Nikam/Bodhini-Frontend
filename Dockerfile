FROM node:18.20.2-alpine

RUN apk add --update --no-cache python3 make g++ bash openssl-dev

# For development CI
ENV CI=true

RUN apk update

WORKDIR /app
# COPY .npmrc .npmrc
COPY package.json ./
ENV export CPPFLAGS=-I/usr/local/opt/openssl/include
ENV export LDFLAGS=-L/usr/local/opt/openssl/lib
RUN npm install
# RUN rm -f .npmrc
COPY ./ ./

CMD ["npm", "start"]