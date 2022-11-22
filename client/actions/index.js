import {
  getTrails,
  addNewTrail,
  removeCurrentTrail,
  updateCurrentTrail,
} from '../apiClient'

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

export function deleteTrail(trailId) {
  console.log(trailId)
  return {
    type: 'DEL_TRAIL',
    payload: trailId,
  }
}

export function updateTrail(current, update) {
  return {
    type: 'UPDATE_TRAIL',
    payload: { current: current, update: update },
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

export function createTrail(newTrail) {
  return (dispatch) => {
    dispatch(addTrail(newTrail))
    return addNewTrail(newTrail)
      .then((res) => {
        dispatch(showTrails(res))
      })
      .catch((err) => console.error(err.message))
  }
}

export function removeTrail(trailId) {
  return (dispatch) => {
    dispatch(deleteTrail(trailId))
    return removeCurrentTrail(trailId)
      .then((res) => {
        dispatch(fetchTrails(res))
      })
      .catch((err) => console.error(err.message))
  }
}

// export function editTrail(current, update) {
//   return (dispatch) => {
//     dispatch(updateTrail(current, update))
//     return updateCurrentTrail(current, update)
//       .then((res) => {
//         dispatch(fetchTrails(res))
//       })
//       .catch((err) => console.error(err.message))
//   }
// }
