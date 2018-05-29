// external
import { combineReducers } from 'redux'

// internal
import ui         from './ui'
import applicants from './applicants'


const reducers = combineReducers({
  ui,
  applicants
})

export default reducers
