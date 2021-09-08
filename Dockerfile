FROM node

WORKDIR /opt
COPY . .

ENV APP_VERSION=1.0
RUN npm install

CMD node index.js
