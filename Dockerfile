FROM node:12

WORKDIR /application

COPY package.json /application/package.json

RUN npm install

EXPOSE 3000

COPY . /application

CMD [ "npm", "start" ]
