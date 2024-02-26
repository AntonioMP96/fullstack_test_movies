FROM node:20-alpine

WORKDIR /app

COPY package*.json .

COPY . .
# COPY . /app

RUN npm install

# RUN npm run build

COPY .next ./.next

# CMD ["npm", "run", "dev"]