import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  background: {
    dark: "#0F0F26",
    light: "#FFFFFF",
  },
  borderRadius: {
    light: "1rem",
    madium: "2rem",
    huge: "3rem",
  },
  colors: {
    successColor: "#68DB6B",
    warningColor: "#E09B35",
    errorColor: "#E33F36",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secundary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: "1.2rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
    screens: {
      medium: "(max-width: 768px)",
    },
    spacings: {
      xsmall: "0.8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
};
