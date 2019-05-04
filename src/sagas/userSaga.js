import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes'
import axios from 'axios'

function* authorize({ payload }) {
  const res = yield axios.post('http://localhost:5000/auth', payload, {
    headers: { 'content-type': 'application/json' }
  })
    .catch(console.log)

  yield put({ type: types.USER_LOGGED, payload: res });
}

export default function* userWatcher() {
  yield takeLatest(types.USER_LOGGIN, authorize)
}