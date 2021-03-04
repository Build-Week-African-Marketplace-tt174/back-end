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

### Guest Client
- [GET /api/items]
- [GET /api/items/:id]
- [POST /api/items]



## Authentication


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
{
    "username":"michaelscarn",
    "password":"password"
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
## Guest Client

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
        "category": "Poultry",
        "photo_url": null,
        "company": "The Electric Company"
    },
    {
        "id": 2,
        "name": "Milk",
        "description": "Local, unpasteurized milk sold by the gallon.",
        "price": 2.25,
        "market": "Bungoma",
        "category": "Animal Products",
        "photo_url": null,
        "company": "The Electric Company"
    },
    ...
]
```


#### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/items/:id*

Retrieves a specified item by id.

Response: 
```
{
    "id": 3,
    "name": "Potatoes",
    "description": "5 lbs",
    "price": 3.8,
    "market": "Bungoma",
    "category": "Roots & Tubers",
    "photo_url": null,
    "company": "The Electric Company"
}
```

## User Endpoints

### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/users*

Retrieves all users.

Response:
```
[
    {
        "id": 1,
        "company": "The Electric Company",
        "email": "testuser@email.com",
        "username": "testuser1"
    },
    {
        "id": 2,
        "company": "Dunder Mifflin",
        "email": "dundermifflinpaper@gmail.com",
        "username": "michaelscarn"
    }
]
```


### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/users/:id*

Retrieves a specified user by id. URL must include user id.

Response:
```
{
    "id": 1,
    "company": "The Electric Company",
    "email": "testuser@email.com",
    "username": "testuser1"
}
```


### **DELETE** *https://africanmarketplace-tt174.herokuapp.com/api/users/:id*

Deletes user and all of their items. URL must include user id.

Response:
```
{
    "message": "User was successfully removed"
}
```


### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/users/:user/items*

Retrieves all users items. URL must include user id.

Response:
```
[
    {
        "id": 1,
        "name": "Eggs",
        "description": "Local, cage-free fresh farm eggs sold by the dozen.",
        "price": 2.75,
        "market": "Bungoma",
        "category": "Poultry",
        "photo_url": null
    },
    ...
]
```


### **GET** *https://africanmarketplace-tt174.herokuapp.com/api/users/:user/items/:id*

Retrieves users specified item by id. URL must include both user id and item id.

Response:
```
{
    "id": 1,
    "name": "Eggs",
    "description": "Local, cage-free fresh farm eggs sold by the dozen.",
    "price": 2.75,
    "market": "Bungoma",
    "category": "Poultry",
    "photo_url": null
}
```


### **PUT** *https://africanmarketplace-tt174.herokuapp.com/api/users/:user/items/:id*

Updates users specified item by id. URL must include both user id and item id.

Request Body Guidelines:

    Required: 'name', 'price', 'market', 'category_id', and 'user_id'.

    Optional: 'description', 'photo_url'.

Request Body:
```
{
    "name": "Eggs",
    "description": "Local, cage-free fresh farm eggs sold by the dozen.",
    "price": 2.75,
    "market": "Bungoma",
    "category_id": 10,
    "user_id": 1
}
```

Response:
```
{
    "id": 1,
    "name": "Eggs",
    "description": "Local, cage-free fresh farm eggs sold by the dozen.",
    "price": 2.75,
    "market": "Bungoma",
    "category": "Poultry",
    "photo_url": null,
}
```


### **POST** *https://africanmarketplace-tt174.herokuapp.com/api/users/:user/items*

Adds a new item for sale under user. URL must include user id.

Request Body Guidelines:

    Required: 'name', 'price', 'market', 'category_id', and 'user_id'.

    Optional: 'description', 'photo_url'.

Request Body:
```
{
    "name": "Cucumber",
    "price": 3.75,
    "market": "Bungoma",
    "category": 8
}
```

Response:
```
{
    "id": 6,
    "name": "Cucumber",
    "description": null,
    "price": 3.75,
    "market": "Bungoma",
    "category": "Vegetables",
    "photo_url": null
}
```


### **DELETE** *https://africanmarketplace-tt174.herokuapp.com/api/users/:user/items/:id*

Deletes specified item from user. URL must include user id and item id.

Response:
```
{
    "message": "Item was successfully removed"
}
```