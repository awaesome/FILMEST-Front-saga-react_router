import * as types from '../actions/actionsTypes'
import { isLogged, setAuth, removeAuth, getToken, setToken, removeToken } from '../api/api'

const initialState = {
  token: getToken() || false,
  authorized: isLogged(),
  proposeLogin: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGGED: {
      const { token } = payload
      setAuth(true)
      setToken(token)
      return { ...state, token, authorized: true }
    }
    case types.USER_LOGOUT: {
      removeAuth()
      removeToken()
      return { ...state, token: false, authorized: false }
    }
    case types.USER_SHOW_LOGIN_PROPOSE: {
      removeAuth()
      removeToken()
      return { ...state, token: false, authorized: false, proposeLogin: true }
    }
    case types.USER_REMOVE_LOGIN_PROPOSE: {
      return { ...state, proposeLogin: false }
    }
    default:
      return state
  }
}