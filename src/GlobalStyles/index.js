import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
	html, body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
	}
  #root {
    display: flex;
    align-items: center;
    height: inherit;
    width: inherit;
    > * {
      height: 100%;
    }
  }
`;

export default GlobalStyles;