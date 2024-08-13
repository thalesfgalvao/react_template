import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.medium};
      background-color: ${theme.background.white};
    }
    ol,
    li {
      list-style: none;
    }
    button {
      mouse: pointer;
    }
  `}
`;
