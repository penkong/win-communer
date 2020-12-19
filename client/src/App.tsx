// ------------------------- Packages ------------------------------

import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// ------------------------ Local ----------------------------------

import { GlobalStyle, darkThemeForExample } from './v1/styles'
import { AppDiv } from '../App.style'
import { ErrorBoundary, Spinner } from './v1/components'

// -----------------------------------------------------------------

const _App = () => {
  return (
    <ThemeProvider theme={darkThemeForExample}>
      <GlobalStyle />
      <AppDiv>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/todo" component={ContactUs} />
              <Route exact path="/" component={Landed} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppDiv>
    </ThemeProvider>
  )
}

// -----------------------------------------------------------------

export const App = _App
