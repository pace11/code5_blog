import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import store from '../src/redux/store'
import BodyComponent from './Body'
import RouterWeb from './router.web'
import theme from './common/theme'

const GlobalStyled = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css?family=Abel');
    font-family: 'Abel', sans-serif;
    font-size: 17px;
    background-color: ${theme.colors.gray_light};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <React.Fragment>
          <GlobalStyled />
          <BodyComponent>
            <RouterWeb />
          </BodyComponent>
        </React.Fragment>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
