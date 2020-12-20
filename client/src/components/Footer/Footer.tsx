// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { FooterDiv } from './Footer.style'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _Footer: React.FC<IAppProps> = () => {
  // ---

  return <FooterDiv>Footer</FooterDiv>
}

// ---------------------------------

export const Footer = _Footer
