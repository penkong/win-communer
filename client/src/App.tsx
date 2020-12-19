// ------------------------- Packages ------------------------------

import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// ------------------------ Local ----------------------------------

import { GlobalStyle, darkThemeForExample } from './styles'
import { AppDiv } from './App.style'

import { ErrorBoundary, Spinner } from './components'
import { Todo, Landing } from './pages'

// -----------------------------------------------------------------

const _App = () => {
  return (
    <ThemeProvider theme={darkThemeForExample}>
      <GlobalStyle />
      <AppDiv>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/todo" component={Todo} />
              <Route exact path="/" component={Landing} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppDiv>
    </ThemeProvider>
  )
}

// -----------------------------------------------------------------

export const App = _App
