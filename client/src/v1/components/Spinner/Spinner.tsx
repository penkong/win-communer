// ------------------------- Packages ------------------------------

import React from 'react'

// ------------------------ Local ----------------------------------

import { SpinnerContainer, SpinnerOverlay } from './Spinner.style'

// -----------------------------------------------------------------

const _Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  )
}

// -----------------------------------------------------------------

export const Spinner = _Spinner
