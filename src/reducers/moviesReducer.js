import * as types from '../actions/actionsTypes'

const initialState = {
  movies: [],
  movie: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.MOVIES_RECEIVED: {
      return { ...state, movies: payload }
    }
    case types.MOVIE_RECEIVED: {
      return { ...state, movie: payload }
    }
    default:
      return state
  }
}