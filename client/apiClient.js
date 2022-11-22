import request from 'superagent'

export function getTrails() {
  return request.get('/api/v1/trails').then((res) => {
    return res.body
  })
}

export function addNewTrail(newTrail) {
  return request
    .post('/api/v1/trails')
    .send(newTrail)
    .then((res) => {
      return res.body
    })
}

export function removeCurrentTrail(id) {
  return request.del(`/api/v1/trails/${id}`)
}

// export function updateCurrentTrail(current, update) {
//   return request
//     .patch(`/api/v1/trails/${current}`)
//     .send(update)
//     .then((res) => {
//       return res.body
//     })
//     .catch((err) => console.error(err.message))
// }
