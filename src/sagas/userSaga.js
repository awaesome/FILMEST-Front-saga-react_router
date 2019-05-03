import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes'
import axios from 'axios'

function* authorize({ payload }) {
  console.log(payload)
  const res = yield axios.post('http://localhost:5000/auth', payload, {
    headers: { 'content-type': 'application/json' }
  })
  // ({
  //   method: 'POST',
  //   url: 'http://localhost:5000/auth',
  //   headers: { 'content-type': 'application/json' },
  //   data: JSON.stringify(payload)
  // })
    .catch(console.log)

  yield put({ type: types.USER_LOGGED, payload: res });
}

export default function* userWatcher() {
  yield takeLatest(types.USER_LOGGIN, authorize)
}