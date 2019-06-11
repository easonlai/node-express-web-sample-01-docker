FROM node:10.16.0-alpine

ADD package.json package.json
RUN npm install
ADD . .

CMD ["node","app.js"]