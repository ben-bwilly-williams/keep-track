import { getTrails, addNewTrail, removeCurrentTrail } from '../apiClient'

export function showTrails(trails) {
  return {
    type: 'SHOW_TRAILS',
    payload: trails,
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

export function createTrail(newTrail) {
  return (dispatch) => {
    return addNewTrail(newTrail)
      .then((res) => {
        dispatch(showTrails(res))
      })
      .catch((err) => console.error(err.message))
  }
}

export function removeTrail(trailId) {
  return (dispatch) => {
    return removeCurrentTrail(trailId)
      .then((res) => {
        dispatch(showTrails(res))
      })
      .catch((err) => console.error(err.message))
  }
}
