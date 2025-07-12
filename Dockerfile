FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["node", "server/server.js"]
