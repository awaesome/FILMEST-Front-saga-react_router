import { all, fork } from 'redux-saga/effects'
import userSaga from './userSaga'
import moviesSaga from './moviesSaga'

const sagas = [userSaga, ...moviesSaga]

export default function* rootSaga() {
  yield  all(sagas.map(fork))
}