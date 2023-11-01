# Use an official Node.js base image as the base image
FROM node:20-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the source code to the container
COPY . .

# Specify the default command to run when the container starts
CMD ["npm", "start"]