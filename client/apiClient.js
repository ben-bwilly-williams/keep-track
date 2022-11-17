import request from 'superagent'

export function getTrails() {
  return request.get('/trails').then((showTrails) => {
    return showTrails.body
  })
}

export function addNewTrail(trail) {
  return request
    .post('/trails')
    .send({ trail })
    .then((addTrail) => {
      return addTrail.body
    })
}
