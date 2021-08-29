import { combineReducers } from 'redux'
import mapArray from './mapreducer'

const rootReducer = combineReducers({
  array: mapArray
})

export default rootReducer