import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionsTypes'
import { getMovie, getMovies } from '../api/endpoints'

function* fetchMovies() {
  const res = yield getMovies()

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.MOVIES_RECEIVED, payload: res.data })
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

function* fetchMovie({ id }) {
  const res = yield getMovie(id)

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.MOVIE_RECEIVED, payload: res.data })
  } else if ((res.status && res.status === 401)) {
    yield put({ type: types.USER_SHOW_LOGIN_PROPOSE })
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

function* moviesWatcher() {
  yield takeLatest(types.GET_MOVIES, fetchMovies)
}

function* movieWatcher() {
  yield takeLatest(types.GET_MOVIE, fetchMovie)
}

export default [
  moviesWatcher,
  movieWatcher
]