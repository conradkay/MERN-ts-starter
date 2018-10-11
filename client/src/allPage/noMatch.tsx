import React from 'react'
import { Header } from '../exports'
export class NoMatch extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <Header currentComponent="404" />
        <h1 style={{fontSize: 50, marginTop: 100, backgroundColor: 'black', color: 'green'}}>
          Dooodododododo you have hacked the website dododododdodo
        </h1>
        <img src="https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg" alt="hackerman"/>
      </div>
    )
  }
}
