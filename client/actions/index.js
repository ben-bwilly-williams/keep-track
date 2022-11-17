import request from 'superagent'
import { getTrails, addNewTrail } from '../apiClient'

export function addTrail(newTrail) {
  return {
    type: 'ADD_TRAIL',
    payload: newTrail,
  }
}

export function deleteTrail(deleteTrail) {
  return {
    type: 'DEL_TRAIL',
    payload: deleteTrail,
  }
}

export function showTrails(trails) {
  return {
    type: 'SHOW_TRAILS',
    payload: trails,
  }
}

export function fetchTrails() {
  return (dispatch) => {
    return getTrails()
      .then((trails) => {
        dispatch(showTrails(trails))
        return null
      })
      .catch((err) => console.error(err.message))
  }
}

// export function createTrail(newTrail) {
//   return (dispatch) => {
//     return addNewTrail(newTrail)
//       .then((newTrail) => {
//         dispatch(addTrail(newTrail))
//         return null
//       })
//       .catch((err) => console.error(err.message))
//   }
// }

export function createTrail(newTrail) {
  return request
    .post('/trails')
    .send(newTrail)
    .then((res) => {
      return res.body
    })
    .catch((err) => console.error(err.message))
}
