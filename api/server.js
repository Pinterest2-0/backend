const express = require('express')
const articleRouter = require('./articles/articles-router')
const server = express()

server.use(express.json())

server.use('/api/articles', articleRouter)

server.get('/', (req, res) => {
    res.send( `<h2>Server is working!</h2>` )
})

module.exports = server;