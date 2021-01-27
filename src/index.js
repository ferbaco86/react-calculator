import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Routes from './components/Routes';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #264653;
    font-family: monospace;
  }`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
