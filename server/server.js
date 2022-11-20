const express = require('express')
const path = require('path')
const cors = require('cors')
const trailsRoute = require('../server/routes/trails')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use(cors('*'))
// server.use('/trails', trailsRoute)

server.use('/api/v1/trails', trailsRoute)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
