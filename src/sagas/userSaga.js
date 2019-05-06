import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes'
import { userAuth } from '../api/endpoints'

function* authorize({ payload }) {
  const res = yield userAuth(payload)

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.USER_LOGGED, payload: res.data });
  } else if ((res.status && res.status === 401)) {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

export default function* userWatcher() {
  yield takeLatest(types.USER_LOGGIN, authorize)
}