const request = require('supertest');
const server = require('../server');
const db = require('../../data/dbConfig');



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



describe('server.js', ()=>{
    
    test('Enviorment set to "testing"', ()=>{
        expect(process.env.DB_ENV).toBe("testing");
    });


    describe('Endpoints', ()=>{
        test('--GET-- /api/items', async ()=>{
            
        })

        test('--POST-- /api/auth/register', async ()=>{

        })
    })



})