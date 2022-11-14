import { combineReducers } from 'redux'

import trailsReducer from './trails'

const reducer = combineReducers({
  trails: trailsReducer,
})

export default reducer
