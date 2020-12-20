<p align="center">
  <a href="http://www.penbeh.com/" target="blank"><h1>created by Mazdak Nazemi</h1></a>
</p>
<p align="center">
  nazemi.works@gmail.com
</p>

## Description

this powered by [Nest](https://github.com/nestjs/nest) and also can use it with spa and ssr application.

##### Folder Structure :

backend
client (CRA application - it can be nextjs also)
readme.md

now before document and more about structure there are things for us to know .

###### consideration :

it is a bit weird to use redux and graphql beside each other , and consider as bad practice , because each one provide his cache itself
for demonstration i implement base structure of both but in reality it is not common.

### NOW LET'S START :

whole project fully written in typescript with my stlye of coding

- Git branching Not considered for now .

* Every folder has indexer - prevent code polution on imports .
* we have not focus on database stuff just for demonstration
* structure of code make it obvious to use.
* Negative sapcing in code .
* Naming style of JAVA like projects .
* Type definitions .
* Backend structure is ready to become microservice .
* Each Domain in back provided by module .
* Clean architecture .
* Dockerfile . (I wanted to do more but must fix my problem with vpn for k8s and ...)
* Main logic in front come from redux or graphql with apollo can embed relay also .
* Decoupled frontend .
* Reusability .
* Best redux store design in front .
* Api provide SPA , with small changes Ready to become SSR with something like nextjs or nuxtjs .
* Prttier
* And lots ... (as I notice will add here :))

### HOW USE ???

first must setup database :

if you have mysql locally continue to next step otherwise use docker is good
please consider mysql8 with node (in my env) were so buggy and that had take my time so much
also for me it cause so problem for creation of docker-compose

```bash

  docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=root -d mysql/mysql-server:5.7

  // after creation of container with name = mysql

  docker exec -it mysql mysql -u root -p

  // enter password

  CREATE DATABASE (if not extist ...) communer;

  // must see line below
  // Query OK, 1 row affected
  // now good and continue.

```

after that in each main folder, change to and :

```bash
$ npm install
```

### for backend stand alone :

change to directory

```bash

npm run start:dev

```

### for client stand alnoe :

change to directory

```bash

npm run start

```

### fro backend + client together :

change to backend directory

```bash

npm run dev

```

#### Please let me know about any questions you have

please consider rest of things like create list of todos and create style and ... are so simple
in comparison with already created files , but because i dont know about use graphql or redux style
things like todo added ro removed not implemented but consider it done because those are simple parts with jss.
