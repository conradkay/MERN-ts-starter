import { put } from 'redux-saga/effects'
import axios from 'axios' // for api

export function getStateServerCallback() {
  axios.get('/state')
    .then((res: any) => put({ type: 'GET_STATE_RESPONCE', state: res.data }))
    .catch((err: any) => { console.log('getState saga/axios.get.catch: ' + err) })
}
