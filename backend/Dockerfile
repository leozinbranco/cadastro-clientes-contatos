# Use uma imagem base do Node.js
FROM node:18-alpine3.16


RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start:migrate:prod"]
