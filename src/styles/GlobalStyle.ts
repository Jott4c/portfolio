import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }

  body {
    font-family: 'Figtree', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f5f5f5;
    color: #333;
    overflow-x: hidden;

  }


`;

export default GlobalStyle;
