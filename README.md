# African Market Back-End API

## Installation: 

- Clone back-end repo
- Navigate to cloned repository on local machine using `cd`
- Install dependencies on bash terminal using `npm i`
- Install knex globally with `npm i -g knex`
- Migrate a copy of the database with `knex migrate:latest`
- Run pre-existing seeds `knex seed:run`
- Run server with `npm run server`

## Usage

Base URL : (https://africanmarketplace-tt174.herokuapp.com/)

## All Endpoints

### Authentication
- [POST /api/auth/register]
- [POST /api/auth/login]
- [GET /api/auth/logout]

### User Routes
- [GET /api/items]
- [GET /api/items/:id]
- [POST /api/items]

## Authentication Endpoints
#### **POST** */api/auth/register*

Registers a new user account on database.

Request Body:
``` 
    {
      company: 'Dunder Mifflin',
      password: hash,
      username: 'michaelscarn',
      email: 'dundermifflinpaper@gmail.com',
    }

```

Response: 
```
{
    "cookie": {
        "originalMaxAge": 3599999,
        "expires": "2021-03-03T04:40:42.279Z",
        "secure": false,
        "httpOnly": true,
        "path": "/"
    },
    "user": {
        "id": 2,
        "company": "Dunder Mifflin",
        "email": "dundermifflinpaper@gmail.com",
        "username": "michaelscarn",
        "password": "$2b$10$rtx8cEji.GFCAiq8z6gIDekecZ7pd0fpZak4Y22KZoVgyFpDERHpa"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTQ3NDI4NzAsImV4cCI6MTYxNDgyOTI3MH0.14U_JPFWGrDGxutYIwycw2FfTDvXPa_uLMZTMZOPMyA"
}
```
## User Endpoints

## Item Endpoints
