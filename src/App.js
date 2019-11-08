import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import BodyComponent from './Body'
import RouterWeb from './router.web'
import theme from "./common/theme";

const GlobalStyled = createGlobalStyle`
  html,
  body {
    margin: 0,
    padding: 0,
    -sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Noto+Sans');
    background-color: ${theme.colors.gray_lighter};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyled />
        <BodyComponent>
        <RouterWeb />
        </BodyComponent>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
