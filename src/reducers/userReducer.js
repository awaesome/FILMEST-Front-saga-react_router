import * as types from '../actions/actionsTypes'
import { isLogged, setAuth, removeAuth } from '../api/api'

const initialState = {
  authorized: isLogged(),
  proposeLogin: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case types.USER_LOGGED: {
      setAuth(true)
      return { ...state, authorized: true }
    }
    case types.USER_LOGOUT: {
      removeAuth('authorized')
      return { ...state, authorized: false }
    }
    case types.USER_SHOW_LOGIN_PROPOSE: {
      return { ...state, proposeLogin: true }
    }
    case types.USER_REMOVE_LOGIN_PROPOSE: {
      return { ...state, proposeLogin: false }
    }
    default:
      return state
  }
}