FROM node:alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install 

COPY . .
COPY .env .env

RUN npm run build

ENV NODE_ENV production

EXPOSE 3001

CMD [ "node", "dist/src/main.js" ]
USER node