const request = require('supertest');
const server = require('../server');
const db = require('../data/dbConfig');

let token;

beforeAll( async ()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
})


// beforeEach( async ()=>{
//     await db.destroy();
// })



describe('server.js', ()=>{
    
    test('Enviorment set to "testing"', ()=>{
        expect(process.env.NODE_ENV).toBe("testing");
    });


    describe('Authentication Endpoints', ()=>{
        test('200 --GET-- /', async ()=>{
            const res = await request(server)
            .get('/')
            
            expect(res.status).toEqual(200)
            expect(res.body).toEqual({"Message": "Hello from the root api."})
        })

        test('200 --POST-- /api/auth/register', async ()=>{
            newUser = {
                username: "username",
                password: "password",
                company: "company",
                email: "email@email.com"
            }

            const res = await request(server)
            .post('/api/auth/register')
            .send(newUser)

            expect(res.status).toEqual(200)
            //assures response contains welcome user message
            expect(res.body.message).toEqual("Welcome User")
        })

        test('200 --POST-- /api/auth/register', async ()=>{
            const credentials = {
                username: "username",
                password: "password"
            }

            const res = await request(server)
            .post('/api/auth/login')
            .send(credentials)

            expect(res.status).toEqual(200)
            //assures login is assigning a json token
            expect(res.body.token).toBeDefined()
            
            token = res.body.token
            
        })
    })

    describe('Guest Endpoints', () => {
        test('200 --GET-- /api/items', async ()=>{
    
            const res = await request(server)
            .get('/api/items')
            
            expect(res.status).toEqual(200)
            expect(res.body).toEqual([])
            expect(res.body.length).toEqual(0)
        })

        test('200 --GET-- /api/items/:id', async ()=>{
    
            const res = await request(server)
            .get('/api/items/3')
            
            expect(res.status).toEqual(200)
            expect(res.body).toEqual([])
            expect(res.body.length).toEqual(0)
        })
    
    });



})