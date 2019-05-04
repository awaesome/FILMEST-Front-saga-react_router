import { combineReducers } from 'redux'
import movies from './moviesReducer'
import user from './userReducer'
import error from './errorReducer'

export default combineReducers({
  movies,
  user,
  error
})