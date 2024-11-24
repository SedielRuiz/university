FROM node:21

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3015

CMD ["npm", "run", "start:dev"]
