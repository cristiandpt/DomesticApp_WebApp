# DomesticApp

## Migraciones
 
 Para correr las migraciones, tienes que seguir los siguientes pasos:

1. Buildear y correr los contenedores:

```bash
docker compose build rust-app postgres
docker compose up rust-app postgres
```

2. Entrar al contenedor de "rust-app":
    
- Listar contenedores:
    
```bash
docker ps -a 
```

- Ubicar el ID del contenedor con la imagen "domesticapp_webapp-rust-app"

```
CONTAINER ID   IMAGE                         COMMAND                  CREATED             STATUS             PORTS                                       NAMES
d66f13883928   postgres:13                   "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   domesticapp_webapp-postgres-1
715c08c04aed   domesticapp_webapp-rust-app   "cargo run"              About an hour ago   Up About an hour   0.0.0.0:8081->8081/tcp, :::8081->8081/tcp   domesticapp_webapp-rust-app-1
```

- Acceder al contenedor correspondiente a la imagen "domesticapp_webapp-rust-app":

```bash
docker exec -it <CONTAINER-ID-RUST> bash
```

3. Ejecutar el siguiente comando:
- **OJO: Este script solo se va a ejecutar una vez.**

```bash
./populate_migrations.sh
```

Con eso ya estaría realizada la migración de las tablas para la base de datos en el contenedor de postgres
