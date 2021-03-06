const express = require('express')
const cors = require('cors')
const articleRouter = require('./articles/articles-router')
const authRouter = require('./auth/auth-router')
const savedRouter = require('./savedArticles/saved-router')
const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/articles', articleRouter)
server.use('/api/auth', authRouter)
server.use('/api/saved', savedRouter)

server.get('/', (req, res) => {
    res.send( `<h2>Server is working!</h2>` )
})

module.exports = server;