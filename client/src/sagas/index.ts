import { all, takeEvery } from 'redux-saga/effects'
import { getStateServerCallback } from './api'

function* getStateServer() {
  yield takeEvery('GET_STATE_REQUEST', function* () {
    yield getStateServerCallback()
  })
}

export function* runAll() {
  yield all([
    getStateServer()
  ])
}
