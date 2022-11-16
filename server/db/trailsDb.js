const config = require('./knexfile').development
const connection = require('knex')(config)

function getTrails(db = connection) {
  return db('trailsDb').select()
}

function addTrail(newTrail, db = connection) {
  // console.log(newTrail)
  return db('trails').insert(newTrail)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTrails,
  addTrail,
  close,
}
