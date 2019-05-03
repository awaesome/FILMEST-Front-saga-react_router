import * as types from '../actions/actionsTypes'

const initialState = {
  authorized: !!JSON.parse(localStorage.getItem('authorized'))
}

export default function movies(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case types.USER_LOGGED: {
      localStorage.setItem('authorized', 'true')
      return { ...state, authorized: true }
    }
    case types.USER_LOGOUT: {
      localStorage.removeItem('authorized')
      return { ...state, authorized: false }
    }
    default:
      return state
  }
}