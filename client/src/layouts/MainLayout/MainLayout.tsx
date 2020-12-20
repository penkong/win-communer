// ------------------------- Packages ------------------------------

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// ------------------------ Local ----------------------------------

import { MainLayoutProvider } from './MainLayout.style'
import { Footer, Header, SideBar } from '../../components'

// -----------------------------------------------------------------

interface IAppProps {}

// ---

const _MainLayout: React.FC<IAppProps> = ({ children }) => {
  // ---

  return (
    <MainLayoutProvider>
      <Header />
      <div>
        <SideBar />
      </div>
      <div>{children}</div>
      <Footer />
    </MainLayoutProvider>
  )
}

// ---------------------------------

export const MainLayout = _MainLayout
