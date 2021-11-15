import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Nav from './components/Nav';
import Footer from './components/Footer';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Nav />
      <App />
      <Footer />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
