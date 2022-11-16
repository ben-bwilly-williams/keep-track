const config = require('./knexfile').development
const connection = require('knex')(config)

function addTrail(newTrail, db = connection) {
  console.log(newTrail)
  return db('trails').insert(newTrail)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  addTrail,
  close,
}
