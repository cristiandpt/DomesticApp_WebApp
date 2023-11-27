# DomesticApp

## Migrations
 
 In order to initialize migrations, follow the steps down below.

1. Build and get up the containers:

```bash
docker compose build rust-app postgres
docker compose up rust-app postgres
```

2. Get into "rust-app" container:
    
- List containers:
    
```bash
docker ps -a 
```

- Identify "domesticapp_webapp-rust-app" container ID

```
CONTAINER ID   IMAGE                         COMMAND                  CREATED             STATUS             PORTS                                       NAMES
d66f13883928   postgres:13                   "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   domesticapp_webapp-postgres-1
715c08c04aed   domesticapp_webapp-rust-app   "cargo run"              About an hour ago   Up About an hour   0.0.0.0:8081->8081/tcp, :::8081->8081/tcp   domesticapp_webapp-rust-app-1
```

- Access "domesticapp_webapp-rust-app" container:

```bash
docker exec -it <CONTAINER-ID-RUST> bash
```

3. Execute the following script:
- **IMPORTANT NOTE: THIS SCRIPT IS ONLY GOING TO BE EXECUTED ONCE.**

```bash
./populate_migrations.sh
```

At this point the initial migration setup from the rust backend to the postgres container is finished, and thus the database tables can be accessed from the postgres docker container.
