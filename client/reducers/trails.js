const initialTrailState = []

const trailReducer = (state = initialTrailState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_TRAIL':
      return [...state, payload]
    case 'DEL_TRAIL':
      return state.filter((trail) => trail !== payload)
    case 'SHOW_TRAILS':
      return payload
    // case 'UPDATE_TRAIL':
    //   return state.map((trail) =>
    //     trail === payload.current ? payload.update : trail
    // )
    default:
      return state
  }
}

export default trailReducer
