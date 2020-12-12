  
FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY index.js ./


COPY public ./public

EXPOSE 3002

CMD [ "npm", "run", "start" ]