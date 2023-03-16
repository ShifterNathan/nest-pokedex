<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute on development 

1. Clone the repository

2. Install dependencies:
```
yarn install
```

3. Install the Nest CLI globally:
```
npm i -g @nest/cli
```

4. Start up the database
```
docker-compose up -d
```

5. Clone the ```.env.template``` file and rename the copy to ```.env```

6. Fill the enviromental variables defined in ```.env``` 

7. Run the app in dev mode:
```
yarn start:dev
```

8. Rebuild the DB with a seed
```
http://localhost:3000/api/seed
```

## Used stack
* MongoDB
* Nest
