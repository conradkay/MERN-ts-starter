import React from 'react'
import { Header } from '../exports'
export class NoMatch extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <Header currentComponent="404" />
        <h1 style={{fontSize: 50, backgroundColor: 'black', color: 'green'}}>
          404, OOPSIE 
        </h1>
      </div>
    )
  }
}
