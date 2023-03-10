import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap’);
  html,
  body {
    height: 100%;
    width: 100%;
     font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

img{max-width:100%}

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  
`;
