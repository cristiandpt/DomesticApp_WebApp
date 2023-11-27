# Use an official Go runtime as the base image
FROM golang:1.21.3-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any dependencies or tools required for your Go project
# For example, you can use 'go get' to install packages
RUN go get -u github.com/gin-gonic/gin

EXPOSE 8080

# Specify the default command to run when the container starts
CMD ["go", "run", "main.go"]