# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i

# Bundle app source
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Build the application
RUN pnpm run build

# Start the application
CMD ["pnpm", "start"]
