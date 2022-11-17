const path = require('path')
const express = require('express')
const cors = require('cors')
const trailsRoute = require('../server/routes/trails')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/trails', trailsRoute)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

// server.get('/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   let index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

module.exports = server
