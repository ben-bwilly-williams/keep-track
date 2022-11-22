// const config = require('./knexfile').development
const connection = require('./connection')

function getTrails(db = connection) {
  return db('trails').select()
}

function addTrail(trail, db = connection) {
  return db('trails').insert(trail)
}

function deleteTrail(id, db = connection) {
  return db('trails').where({ id }).del()
}

function updateTrail(id, newInfo, db = connection) {
  return db('trails').where({ id }).update(newInfo)
}

function close(db = connection) {
  db.destroy()
}

module.exports = {
  getTrails,
  addTrail,
  deleteTrail,
  updateTrail,
  close,
}
