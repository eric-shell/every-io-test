import React from 'react'
import { ChallengeComponent } from './ChallengeComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To The Every.io Code Challenge.</h1>
        <div>
          <a
            target="_blank"
            className="button"
            href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
            rel="noreferrer">
            Checkout the Prototype
          </a>
        </div>
      </header>
      <main className="codebox">
        <ChallengeComponent />
      </main>
    </div>
  )
}

export default App
