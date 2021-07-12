import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
	html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
	}
  #root {
    height: inherit;
    width: inherit;
  }
  .global-container {
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    ${({subHeaderStyles}) => subHeaderStyles};
    font-family: sans-serif;
  }
  h1 {
    font-family: sans-serif;
  }
`;

export default GlobalStyles;