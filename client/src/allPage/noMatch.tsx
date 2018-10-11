import React from 'react'
import { Header, withSnack } from '../exports'
class NoMatchComponent extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Header currentComponent={'404'} />
        <h1 style={{ fontSize: 50, backgroundColor: 'black', color: 'green' }}>
          404, OOPSIE
        </h1>
      </div>
    )
  }
}
export const NoMatch = withSnack('404 :(', NoMatchComponent, 'error', '')
