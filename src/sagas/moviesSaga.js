import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionsTypes'
import { getMovies } from '../api/endpoints'

function* fetchMovies() {
  const res = yield getMovies()
  console.log('res', res)

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.MOVIES_RECEIVED, payload: res.data })
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

export default function* moviesWatcher() {
  yield takeLatest(types.GET_MOVIES, fetchMovies)
}