import { put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionsTypes'
import { userAuth, userRegistration } from '../api/endpoints'

function* authorize({ payload }) {
  const res = yield userAuth(payload)

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.USER_LOGGED, payload: res.data });
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

function* register({ payload }) {
  const res = yield userRegistration(payload)

  if (res.status && /20./gi.test(res.status)) {
    yield put({ type: types.USER_LOGGIN, payload });
  } else {
    yield put({ type: types.ERROR_RECEIVED, payload: res.data })
  }
}

function* userLoginWatcher() {
  yield takeLatest(types.USER_LOGGIN, authorize)
}

function* userRegistrationWatcher() {
  yield takeLatest(types.USER_REGISTRATION, register)
}

export default [
  userLoginWatcher,
  userRegistrationWatcher
]