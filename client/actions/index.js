import { getTrails, addNewTrail } from '../apiClient'

export function showTrails(trails) {
  return {
    type: 'SHOW_TRAILS',
    payload: trails,
  }
}

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
//     return newTrail(newTrail)
//     .then((res) => {
//       dispatch(addTrail(res))
//       return res.body
//     })
//     .catch((err) => console.error(err.message))
//   }
// }

// ABOVE IS WHAT WORKED BEFORE *******

export function createTrail(newSubmission) {
  return (dispatch) => {
    return addNewTrail(newSubmission)
      .then((res) => {
        dispatch(showTrails(res))
      })
      .catch((err) => console.error(err.message))
  }
}
