import * as types from './actionsTypes'

export const loadMovies = () => ({
  type: types.GET_MOVIES
});

export const loadMovie = (id) => ({
  type: types.GET_MOVIE,
  id
})