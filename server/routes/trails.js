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
  db.addTrail(req.body)
    .then(() => {
      return db.getTrails()
    })
    .then((trails) => {
      res.json(trails)
    })
    .catch((err) => console.error(err.message))
})
