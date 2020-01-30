import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from '@rocketseat/unform';
import colors from './colors';

// import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root, #root>div {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #dcdcdc;
  }
  body, input, button {
    font:  14px 'Roboto', sans-serif;
  }
`;
