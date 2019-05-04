import * as types from '../actions/actionsTypes'

const initialState = {
  isError: false
}

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case types.ERROR_RECEIVED: {
      return { isError: true, ...payload }
    }
    case types.ERROR_RESET: {
      return { isError: false }
    }
    default:
      return state
  }
}