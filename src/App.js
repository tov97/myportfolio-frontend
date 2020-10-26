import React from "react";
import { Navigator } from "./Navigation";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import theme from "./Constants/theme";
import norseFont from "./Assets/Norse.otf";
import norseFontBold from "./Assets/Norsebold.otf";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
      <GlobalStyle />
    </ThemeProvider>
  );
};
const GlobalStyle = createGlobalStyle`
/* Norse fonts */ 
@font-face {
  font-family: "Norse";
  src: local("Norse"), url(${norseFont}) format("truetype");
}
@font-face {
  font-family: "Norsebold";
  src: local("Norsebold"), url(${norseFontBold}) format("truetype");
}

/* body global styles */
body {
  background: rgb(169,185,210);
  background: radial-gradient(circle, rgba(169,185,210,1) 0%, rgba(231,231,231,1) 100%);
  background-size: 100% 100%;
  background-color: #000;
  // persistent scrollbar to prevent resizing glitches
  overflow-y: scroll;

  // parallax (for desktop)
  @media (min-height: 840px) {
    background-attachment: fixed;
    background-size: cover;
  }
}`;

export default App;
