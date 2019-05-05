import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes'
import { userAuth } from '../api/endpoints'

function* authorize({ payload }) {
  const res = yield userAuth(payload)

  yield put({ type: types.USER_LOGGED, payload: res });
}

export default function* userWatcher() {
  yield takeLatest(types.USER_LOGGIN, authorize)
}