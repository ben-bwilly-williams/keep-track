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
