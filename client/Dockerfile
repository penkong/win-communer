FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .


RUN npm install 

COPY . .
COPY .env.production .env

RUN npm run build

ENV NODE_ENV production

EXPOSE 8080

# CMD [ "node", "dist/public/index.html" ]