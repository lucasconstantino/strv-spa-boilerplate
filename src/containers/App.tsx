import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import CallToAction from '../components/CallToAction'

const Global = createGlobalStyle`
  body,
  html {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: white;
    background-color: #282c34;
  }
`

const Wrapper = styled.div`
  padding: 95px;
  text-align: center;
`

const App: React.FC = () => (
  <Wrapper>
    <Global />
    <header>
      <p>
        Edit <code>src/containers/App.tsx</code> and save to change.
      </p>
      <CallToAction href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </CallToAction>
    </header>
  </Wrapper>
)

export default App
