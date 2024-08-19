# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Set the environment variable to allow legacy OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Install `serve` to serve the application
RUN npm install -g serve

# Use port 3000 to serve the application
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
