// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { MainLayout } from '../layouts'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Landing: React.FC<IAppProps> = () => {
  // ---

  return <MainLayout>landing page</MainLayout>
}

// ---------------------------------

export const Landing = _Landing
