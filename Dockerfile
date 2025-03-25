# Use the official Node.js image for testing
FROM node:18-alpine AS test

WORKDIR /app

# Copy only package.json and install dependencies
COPY package.json .
RUN npm install

# Copy test files and run tests
COPY tests/ tests/
COPY html/ html/
RUN npm test

# Use the official Nginx image to serve HTML
FROM nginx:latest

COPY html /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
