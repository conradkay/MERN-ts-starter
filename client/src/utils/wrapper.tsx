import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from './router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, SnackbarRoot, defaultState, getStateServer } from '../exports'
import thunk from 'redux-thunk'
import { theme } from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles'


export const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(thunk)))


const Wrapper = () => {
  store.dispatch(getStateServer())
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <SnackbarRoot />
        <Router />
      </MuiThemeProvider>
    </Provider>
  )
}
export default Wrapper
