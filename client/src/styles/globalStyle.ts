// ------------------------- Packages ------------------------------

import { createGlobalStyle } from 'styled-components'

// ------------------------ Local ----------------------------------

// -----------------------------------------------------------------

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "";
    font-weight: normal;
  }

  html {
    box-sizing: border-box;
    min-height: 100vh;
    font-size: 62.5%;
    font-family: "Lato", sans-serif;
    background: rgb(193, 193, 193);
    @media screen and (min-width: 2000px) {
      font-size: 75%;
    }
    @media screen and (max-width: 1200px) {
      font-size: 59%;
    }
    @media screen and (max-width: 968px) {
      font-size: 57%;
    }
    @media screen and (max-width: 768px) {
      font-size: 55%;
    }
    @media screen and (max-width: 600px) {
      font-size: 50%;
    }
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background-color: white;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none; 
  }
`
