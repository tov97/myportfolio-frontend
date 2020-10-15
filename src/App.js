import React from "react";
import { Navigator } from "./Navigation";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import theme from "./Constants/theme";
import norseFont from "./Assets/Norse.otf";
import norseFontBold from "./Assets/Norsebold.otf";
import canvas from "./Assets/canvas.jpg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator />
      <GlobalStyle />
    </ThemeProvider>
  );
}
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
  // CSS reset: margin
  margin: 0;

  // centered background image
 background: rgb(247,237,206);
background: radial-gradient(circle, rgba(247,237,206,0.7581233176864496) 0%, rgba(207,163,52,1) 100%);
 /* background: url(${canvas}) no-repeat center center fixed; */
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
