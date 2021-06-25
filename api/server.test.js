const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')
const Article = require('./articles/articles-model')
const Users = require('./auth/auth-model')

test('sanity' , () => {
    expect(true).not.toBe(false)
})

describe('server.js', () => {
    beforeAll( async () => {
        await db.migrate.rollback()
        await db.migrate.latest()
    } )

    // USERS
    describe( '[POST] /register', () => {
        it('creates new user and returns user data', async () => {
            await (request(server).post('/api/auth/register')).send({
                firstName: "Bruce",
                lastName: "Banner",
                username: "The Hulk",
                password: "SMASH!"
            })
            expect(await Users.findAll()).toHaveLength(7)
        })

        it('sends error message if username is taken', async () => {
            const res = await (request(server).post('/api/auth/register')).send({
                username: "The Hulk",
                password: "SMASH!"
            })
            expect(res.body).toMatchObject({message: /'username taken'/i})
        })
    } )
    
    describe( '[POST] /login', () => {
        it('creates new user and returns user data', async () => {
            await (request(server).post('/api/auth/login')).send({
                username: "The Hulk",
                password: "SMASH!"
            })
            expect.objectContaining({token: expect.anything()})
        })

        it('sends error message if username or password is not valid', async () => {
            const res = await (request(server).post('/api/auth/login')).send({
                username: "",
                password: ""
            })
            expect(res.body).toMatchObject({message: /'Please enter credentials'/i})
        })
    } )

    // ARTICLES
    describe( '[GET] /articles', () => {
        it('creates new user and returns user data', async () => {
            await (request(server).post('/api/auth/login')).send({
                username: "The Hulk",
                password: "SMASH!"
            })
            expect.objectContaining({token: expect.anything()})
        })

        it('sends error message if username or password is not valid', async () => {
            const res = await (request(server).post('/api/auth/login')).send({
                username: "",
                password: ""
            })
            expect(res.body).toMatchObject({message: /'Please enter credentials'/i})
        })
    } )
})