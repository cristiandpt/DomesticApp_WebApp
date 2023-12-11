# Use an official Rust base image as the base image
FROM rust:latest
RUN ["mkdir", "-p", "/home/app/rust_domestik_app"]
# Set the working directory inside the container
WORKDIR /home/app/rust_domestik_app
#RUN ["cargo", "new", "rust_domestik_app"]
# Copy the Cargo.toml and Cargo.lock files to the container ./domestik_app/Cargo.lock
COPY ./domestik_app/Cargo.toml  ./
# Build the dependencies in a separate step to optimize caching    # --release
#RUN cargo build
# Copy the source code to the container
COPY ./domestik_app .
# Copy database scheme
## ../tables_definition.sql .
# Build the application  --release
RUN cargo build
# Install Diese CLI
RUN cargo install diesel_cli --no-default-features --features postgres
# Expose the port on which the server will listen
EXPOSE 8081
# Specify the command to run when the container starts "--release"
CMD ["cargo", "run"]
# Copy the script to the container
# COPY ./domestik_app/scripts/populate_migrations.sh ./scripts
# Entrypoint   Seems like it doesn't work after the script sh, the "cargo run" is not being launched
ENTRYPOINT ["bash", "populate_migrations.sh", "&&", "cargo", "run"] 
#For do the Rust project without install locally it.
### docker run --rm -v $(pwd):/usr/src/my_rust_project -w /usr/src/my_rust_project rust cargo new --bin my_rust_project
