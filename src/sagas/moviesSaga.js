import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionsTypes'
import axios from 'axios'

function* fetchMovies() {
  const res = yield axios.get('http://localhost:5000/movies').catch(error => error.response)
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