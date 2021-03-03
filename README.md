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

### Root API
- [GET /]

### Authentication
- [POST /api/auth/register]
- [POST /api/auth/login]
- [GET /api/auth/logout]

### User Routes
- [GET /api/items]
- [GET /api/items/:id]
- [POST /api/items]

## Authentication Endpoints


#### **GET** */*

Api is up


Response: 
```
{
    "Message": "Hello from the root api."
}
```
#### **POST** *https://africanmarketplace-tt174.herokuapp.com/api/auth/login*

Authenticates user, creates session, and generates a token.

Request Body:
``` 


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

#### **POST** *https://africanmarketplace-tt174.herokuapp.com/api/auth/register*

Registers a new user account on database.

Request Body:
``` 
    {
        "company": "Schrute Farms",
        "password": "password",
        "username": "dwightbeets",
        "email": "dwight@schrutefarms.com"
    }
```

Response: 
```
{
    "message": "Welcome User",
    "newUser": {
        "company": "Schrute Farms",
        "password": "$2b$12$LTQxQNWahGOY2Y5tiR3UA.wl2m/hYrJs950A.Kzqt7IxE2S2y/rXe",
        "username": "dwightbeets",
        "email": "dwight@schrutefarms.com"
    }
}
```
#### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/auth/logout*

Logs user out and destroys session.


Response: 
```
{
    "message": "Session destroyed, user has been logged out."
}

```
## Guest Client Endpoints

#### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/items*

Retrieves all items that are currently for sale.

Response: 
```
[
    {
        "id": 1,
        "name": "Eggs",
        "description": "Local, cage-free fresh farm eggs sold by the dozen.",
        "price": 2.75,
        "market": "Bungoma",
        "category_id": 10,
        "photo_url": null,
        "user_id": 1
    },

    ...

]
```


#### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/items/:id*

Retrieves a specified item by id.

Response: 
```
{
    "id": 2,
    "name": "Milk",
    "description": "Local, unpasteurized milk sold by the gallon.",
    "price": 2.25,
    "market": "Bungoma",
    "category_id": 1,
    "photo_url": null,
    "user_id": 1
}
```

## Item Endpoints
