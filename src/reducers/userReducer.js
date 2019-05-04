import * as types from '../actions/actionsTypes'

const initialState = {
  authorized: !!JSON.parse(localStorage.getItem('authorized')),
  proposeLogin: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case types.USER_LOGGED: {
      localStorage.setItem('authorized', 'true')
      return { ...state, authorized: true }
    }
    case types.USER_LOGOUT: {
      localStorage.removeItem('authorized')
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