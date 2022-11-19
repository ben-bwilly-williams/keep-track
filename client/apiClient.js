import request from 'superagent'

export function getTrails() {
  return request.get('/api/v1/trails').then((res) => {
    return res.body
  })
}

// ABOVE IS WHAT WORKED BEFORE *******

export function addNewTrail(newTrail) {
  return request
    .post('/api/v1/trails')
    .send(newTrail)
    .then((res) => {
      return res.body
    })
}

// export function removeTrailById() {
//   return request.delete('/trailjournal/:id')
// }
