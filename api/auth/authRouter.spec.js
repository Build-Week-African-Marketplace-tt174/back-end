const request = require('supertest');
const server = require('../server');
const db = require('../../data/dbConfig');
const Users = require('../model/userModel');


beforeAll( async ()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})

beforeEach(async ()=>{
    await db('users').truncate();
})

beforeEach( async ()=>{
    await db.destroy();
})

describe('Server', ()=>{

    describe('POST -- register new user', ()=>{
        test('--200 REGISTER', ()=>{
            
        })
    })

})