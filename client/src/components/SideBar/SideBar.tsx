// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { SideBarDiv } from './SideBar.style'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _SideBar: React.FC<IAppProps> = () => {
  // ---

  return <SideBarDiv>SideBar</SideBarDiv>
}

// ---------------------------------

export const SideBar = _SideBar
