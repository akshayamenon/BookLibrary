  
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY index.js  ./

EXPOSE 3001

CMD [ "npm", "run", "start" ]