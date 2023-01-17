FROM node:18 AS build
ADD . /app
WORKDIR /app
RUN npm install --production=false
CMD npm run dev