// const config = require('./knexfile').development
const connection = require('./connection')

function getTrails(db = connection) {
  return db('trailsDb').select()
}

function addTrail(trail, db = connection) {
  return db('trailsDb').insert(trail)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTrails,
  addTrail,
  close,
}
