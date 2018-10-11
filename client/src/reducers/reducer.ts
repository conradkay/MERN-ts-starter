import { State, Action } from '../types'

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SNACKBAR':
      return {
        ...state,
        snackbar: { open: true, message: action.message, variant: action.variant }
      }
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        snackbar: { ...state.snackbar, open: false }
      }

    case 'GET_STATE_RESPONCE':
      return {
        ...action.state,
        isLoading: false,
        snackbar: { open: true, message: 'SERBER STATE GOTTEN', variant: 'success' },
        money: 100
      }
    // this probably should be done in the saga but same thing?
    default:
      return state
  }
}
