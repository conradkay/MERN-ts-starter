import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NoMatch } from '../exports'
/**
 * @returns {JSX} renders and handles all of the routing
 * @description Handles react-router routing and renders all route components, only one at a time
 */
export const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>
  )
}
