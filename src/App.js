import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'react-emotion'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Nav from './components/Nav'
import MobileNav from './components/MobileNav'

injectGlobal`
  body {
    font-family: 'Lato', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, picture, section, summary {
    display: block;
}

  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Merriweather', serif;
    font-weight: bold;
    letter-spacing: normal;
    font-size: 2.3rem;
  }

  p {
    line-height: 1.5;
    letter-spacing: normal;
    color: #5b5e6d;
    margin-bottom: 2rem;
  }

  section {
    padding: 5rem 0;
    border-top: 1px solid #ebebeb
  }

  a {
    color: #424242;
    cursor: pointer;
    text-decoration: none;
  }
`

const AppStyles = styled.div`
  img {
    max-width: 100%;
  }
`
const isBrowser = typeof window !== 'undefined'

const App = () => (
  <Router>
    <AppStyles>
      <header>
        {!isBrowser ? (
          undefined
        ) : window.innerWidth < 480 ? (
          <MobileNav navList={['Services', 'Testimonials', 'Why Us', 'Guarantee']} />
        ) : (
          <Nav navList={['Services', 'Testimonials', 'Why Us', 'Guarantee']} />
        )}
      </header>

      <Routes />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
