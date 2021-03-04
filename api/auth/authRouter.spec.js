const request = require('supertest');
const server = require('../server');
const db = require('../data/dbConfig');



beforeAll( async ()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})


// beforeEach( async ()=>{
//     await db.destroy();
// })



describe('server.js', ()=>{
    
    test('Enviorment set to "testing"', ()=>{
        expect(process.env.DB_ENV).toBe("postgresql://postgres:@localhost:5432/test");
    });


    describe('Endpoints', ()=>{
        test('--GET-- /api/items', async ()=>{
            const res = await request(server)
            .get('/api/items')

            expect(res.body).toBe(0)
        })

        test('--POST-- /api/auth/register', async ()=>{

        })
    })



})