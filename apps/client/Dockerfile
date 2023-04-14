# vite app
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

# Expose port 5173

EXPOSE 5173

# Run the app

CMD [ "pnpm", "build" ]


