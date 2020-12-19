// ------------------------- Packages ------------------------------

import React, { Component, ErrorInfo } from 'react'

// ------------------------ Local ----------------------------------

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from './ErrorBoundary.style'

// -----------------------------------------------------------------

class _ErrorBoundary extends Component {
  state = { hasErrored: false }

  // its react lifeCycle method
  // its allow us to catch error ahead of time
  static getDerivedStateFromError = (error: ErrorEvent) => {
    // process error to return obj of state
    return { hasErrored: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer />
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

// -----------------------------------------------------------------

export const ErrorBoundary = _ErrorBoundary
