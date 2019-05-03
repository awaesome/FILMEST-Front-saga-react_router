import { put, takeLatest, all } from 'redux-saga/effects'
import * as types from '../actions/actionsTypes'
import axios from 'axios'

function* fetchMovies() {
  const res = yield axios.get('http://localhost:5000/movies')

  yield put({ type: types.MOVIES_RECEIVED, payload: res });
}

export default function* moviesWatcher() {
  yield takeLatest(types.GET_MOVIES, fetchMovies)
}