const express = require('express')

const db = require('../db/trailsDb')

const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  db.getTrails()
    .then((trails) => {
      res.json(trails)
    })
    .catch((err) => console.error(err.message))
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

router.delete('/:id', (req, res) => {
  db.deleteTrail(req.params.id)
    .then((trails) => {
      res.json(trails)
    })
    .catch((err) => console.error(err.message))
})
