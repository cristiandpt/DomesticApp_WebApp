# Use an official Node.js base image as the base image
FROM node:20-alpine3.17
# Set the environment variable to development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
# Set the working directory inside the container
RUN ["mkdir", "-p", "/home/app/node_modules"]
WORKDIR /home/app

# Copy the package.json and package-lock.json files to the container
COPY ./domesticapp/package*.json ./
# Install the dependencies
RUN ["npm", "install"]
# Copy the rest of the source code to the container
COPY ./domesticapp .
EXPOSE 3000
# Specify the default command to run when the container starts
CMD [ "npm", "run", "dev" ]