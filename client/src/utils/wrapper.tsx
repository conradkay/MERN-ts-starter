import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from './router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer, SnackbarRoot, runAll, defaultState } from '../exports'
import createSagaMiddleware from 'redux-saga'
import { theme } from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, defaultState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(runAll)

const Wrapper = () => {
  store.dispatch({ type: 'GET_STATE_REQUEST' })
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
