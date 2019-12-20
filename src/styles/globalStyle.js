import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
    transition: all 0.2s linear;
  }
`;

export default GlobalStyle;
