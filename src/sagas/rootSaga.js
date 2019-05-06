import { all, fork } from 'redux-saga/effects'
import userSagas from './userSaga'
import moviesSagas from './moviesSaga'

const sagas = [...userSagas, ...moviesSagas]

export default function* rootSaga() {
  yield  all(sagas.map(fork))
}