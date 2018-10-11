import { all, takeEvery, put } from 'redux-saga/effects'
import axios from 'axios' // for api

function getStateServerCallback() {
  axios.get('/state')
    .then((res: any) => put({ type: 'GET_STATE_RESPONCE', state: res.data }))
    .catch((err: any) => { console.log('getState saga/axios.get.catch: ' + err) })
}

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
