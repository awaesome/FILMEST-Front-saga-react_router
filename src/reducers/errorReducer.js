import * as types from '../actions/actionsTypes'

const initialState = {
  isError: false,
  code: '',
  message: ''
}

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case types.ERROR_RECEIVED: {
      return { isError: true, ...payload }
    }
    case types.ERROR_RESET: {
      return { isError: false, code: '', message: '' }
    }
    default:
      return state
  }
}