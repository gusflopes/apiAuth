import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
// import colors from './colors';

// import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root, .root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #dcdcdc;
  }
  body, input, button {
    font:  14px 'Roboto', sans-serif;
  }

  button.fb-button {
    height: 42;
    width: 174;
    background-color: rgb(255, 255, 255);
    display: inline-flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
    color: #fff;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    justify-content: center;
    background-color: #3B5998;

    i {
      margin-right: 10px;
      font-size: 18px;
    }
  }
`;
