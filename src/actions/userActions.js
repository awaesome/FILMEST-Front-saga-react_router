import * as types from './actionsTypes'

export const userLoggin = (email, password) => ({
  type: types.USER_LOGGIN,
  payload: {
    email,
    password
  }
})

export const userLogout = () => ({
  type: types.USER_LOGOUT
})