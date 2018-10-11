import { Variant, Action } from '../types'
import { Dispatch } from 'redux'
const axios = require('axios')
export const closeSnackbar = (): Action => ({
  type: 'CLOSE_SNACKBAR'
})

export const openSnackbar = (message: string, variant: Variant): Action => ({
  type: 'OPEN_SNACKBAR', message, variant
})
const fetchStuff = () => {
  return axios.get('/state')
}
const postState = (stuff: any) => {
  return {
    type: 'GET_STATE_RESPONCE',
    state: { stuff: stuff }
  }
}
export const getStateServer = () => {
  return (dispatch: Dispatch) => {
    return fetchStuff().then(
      (res: any) => {
        console.log(res.data)
        dispatch(postState(res.data))
      },
      (error: any) => console.log('oopsie')
    )
  }
}
