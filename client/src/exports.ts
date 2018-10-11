export { reducer } from './reducers/reducer'
export { defaultState, getClassSnackbarVariant, getStylesHeader } from './utils/utils'
export { Dispatch } from 'redux'
export {
  closeSnackbar, openSnackbar
} from './utils/actions'
export { SnackbarRoot } from './allPage/snackbarRoot'
export { runAll } from './sagas/index'
export { Header } from './allPage/header'
export { withSnack } from './hocs/snackbar'
export { NoMatch } from './allPage/noMatch'
export { store } from './utils/wrapper'
