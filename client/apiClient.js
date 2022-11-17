import request from 'superagent'

export function getTrails() {
  return request.get('/trails').then((showTrails) => {
    return showTrails.body
  })
}
