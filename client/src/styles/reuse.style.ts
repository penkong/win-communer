// ------------------------- Packages ------------------------------

import { css } from 'styled-components'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

export const clearFix = css`
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
// -----------------------------------------------------------------

export const makeCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
// -----------------------------------------------------------------

export const layoutPosition = css`
  width: 94vw;
  height: 5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.3rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
// -----------------------------------------------------------------

export const liRow = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: auto;
  list-style: none;
  height: 100%;
`
