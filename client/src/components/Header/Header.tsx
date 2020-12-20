// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { HeaderNav } from './Header.style'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Header: React.FC<IAppProps> = () => {
  // ---

  return <HeaderNav>Header</HeaderNav>
}

// ---------------------------------

export const Header = _Header
