const config = require('./knexfile').development
const connection = require('knex')(config)

function addTrail(trail, db = connection) {
  const newTrail = { trail }
  return db('todos').insert(newTrail)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  addTrail,
  close,
}
