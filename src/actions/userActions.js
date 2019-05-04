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

export const showLoginPropose = () => ({
  type: types.USER_SHOW_LOGIN_PROPOSE
})

export const removeLoginPropose = () => ({
  type: types.USER_REMOVE_LOGIN_PROPOSE
})