export { reducer } from './reducers/reducer'
export { defaultState, getClassSnackbarVariant, getStylesHeader } from './utils/utils'
export { Dispatch } from 'redux'
export {
  closeSnackbar, openSnackbar, getStateServer
} from './utils/actions'
export { SnackbarRoot } from './allPage/snackbarRoot'
export { Header } from './allPage/header'
export { withSnack } from './hocs/snackbar'
export { NoMatch } from './allPage/noMatch'
export { store } from './utils/wrapper'
