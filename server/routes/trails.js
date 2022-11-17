const express = require('express')

const db = require('../db/trailsDb')

const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  db.getTrails()
    .then((trails) => {
      res.json(trails)
    })
    .catch(console.error)
})

router.post('/', (req, res) => {
  const newTrail = req.body
  console.log(newTrail)
  db.addTrail(newTrail)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(console.error)
})
