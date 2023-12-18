# DomesticApp

## Setup
To run the frontend of this project, fork or clone this repo and then locally install it using npm

Using SSH:
```
$ git clone git@github.com:cristiandpt/DomesticApp_WebApp.git
```
Using Https:
```
$ git clone https://github.com/cristiandpt/DomesticApp_WebApp.git
```
Now, go to the project directory:
```
$ cd DomesticApp_WebApp/
```
And then you can do the following:

### Run the frontend
```
$ cd web_client/domesticapp/
$ npm run dev
```
After this, you are all set-up, you can go to [localHost](localhost:3000) and the app should be running

### Disclaimer

Because the backend is not integrated yet with the frontend, all views are separated from each other so this is a schema of them all

* [Sign-up page](https//:localhost:3000/sign-up)
* [Login page](https//:localhost:3000/login)
* [Worker home](https//:localhost:3000/worker/home)
* [Client home](https//:localhost:3000/client/home)

Once you are in either the Worker home or Client home, you can navigate to all the pages that each type of user has. At the moment it's all generated with dummy data, but soon it'll have all the data from our DomesticApp API.

### Launch the PostgreSQL database

First of all, go to the root of the project

```
$ cd DomesticApp_WebApp/
```

Then you can execute these lines to start the database:
```
$ docker compose build postgres 
$ docker compose  up -d postgres 
$ docker compose  build rust-app 
$ docker compose  up rust-app
```

Now, to verify everything worked out as expected, you can do the following:

```
$ docker ps -a
```
That will give you the list of all running containers, write down the id of the container with name postgres and then:

```
$ docker exec -it <CONTAINER_ID> psql -h localhost -p 5432 -U domesticapp_user -d domesticapp_db
```
To see all tables within the database you can do:

```
$ \dt
```
