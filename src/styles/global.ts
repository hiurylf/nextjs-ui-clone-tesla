import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *, input, button {
  font: 400 16px Roboto, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    //background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  button {
    cursor: pointer;
  }
`;
