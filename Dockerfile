FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN yarn install

RUN yarn build:app


CMD ["yarn","start:app"]