const express = require('express')

const server = express()

server.use(express.json())

server.use('/', (req, res, next) => {
    res.status(200).json({ message: 'Server is working!' })
})

module.exports = server;