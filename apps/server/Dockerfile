#dockerfile for express backend
FROM node:latest-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Run the app
CMD [ "pnpm", "start" ]

