// ------------------------- Packages ------------------------------

import styled from 'styled-components'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

interface IStyleProps {}

// -----------------------------------------------------------------

export const ErrorImageOverlay = styled.div<IStyleProps>`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// -----------------------------------------------------------------

// background-image: ${({ imageUrl }) => `url($ {imageUrl})`};
export const ErrorImageContainer = styled.div<IStyleProps>`
  display: inline-block;
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`
// -----------------------------------------------------------------

export const ErrorImageText = styled.h2<IStyleProps>`
  font-size: 28px;
  color: #2f8e89;
`
