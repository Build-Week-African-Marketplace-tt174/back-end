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

## Authentication
1. User Registration