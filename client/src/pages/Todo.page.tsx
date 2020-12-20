// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { MainLayout } from '../layouts/'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Todo: React.FC<IAppProps> = () => {
  // ---

  return <MainLayout>todo page</MainLayout>
}

// ---------------------------------

export const Todo = _Todo
