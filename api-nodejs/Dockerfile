FROM node:12

RUN mkdir backend
WORKDIR /backend

COPY package.json /backend/package.json
COPY yarn.lock /backend/yarn.lock

RUN yarn
