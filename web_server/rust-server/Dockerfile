# Use an official Rust base image as the base image
FROM rust:1.67


RUN ["mkdir", "-p", "/home/rust_domestik_app"]

# Set the working directory inside the container
WORKDIR /home/app


#RUN ["cargo", "new", "rust_domestik_app"] 

# Copy the Cargo.toml and Cargo.lock files to the container
COPY Cargo.toml Cargo.lock ./

# Build the dependencies in a separate step to optimize caching
RUN cargo build --release

# Copy the source code to the container
COPY . .

# Build the application
RUN cargo build --release

# Expose the port on which the server will listen
EXPOSE 8000

# Specify the command to run when the container starts
CMD ["cargo", "run", "--release"]

#For do the Rust project without install locally it.