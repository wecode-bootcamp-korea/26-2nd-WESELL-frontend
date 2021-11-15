import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body{
    font-family: 'Roboto', sans-serif;
  }
  
`;

export default GlobalStyle;
