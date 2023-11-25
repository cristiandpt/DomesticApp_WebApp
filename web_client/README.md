## Getting Started

Before building and running the development server with some commands, do this;

- Locate yourself into the folder /web_client/domesticapp, then:

```bash
#Install all the dependencies into your local machine
npm install
```

- Locate yourself into the root folder, the /DomesticApp_WebApp, where the docker-compose.yml is file. Then:

```bash
#Build the image
docker compose build "frontend-app"
# Next,
docker compose up "frontend-app"
```

- Go to the [`localhost:3000`](http://localhost:3000/)
- Open the project in VS Code, in the web_server folder, and try to modify the code.
- Check the changes in the browser, the hot reload is working!

## And... enjoy!
