FROM node:12

WORKDIR /application

COPY package.json /application/package.json

COPY . /application

# RUN npm cache clean --force

RUN npm install

RUN node node_modules/node-sass/scripts/install.js

EXPOSE 3000

CMD [ "npm", "start" ]
