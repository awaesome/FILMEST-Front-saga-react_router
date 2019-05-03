import { combineReducers } from 'redux'
import movies from './moviesReducer'
import user from './userReducer'

export default combineReducers({
  movies,
  user
})