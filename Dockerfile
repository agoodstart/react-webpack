FROM node:16.14.0

WORKDIR /src/app
COPY package*.json ./
RUN npm install react react-dom
COPY . .
EXPOSE 8080
CMD ["npm", "start"]