import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './themes/globalStyles'
import { theme } from './themes/themes'
import Payment from './views/Payment'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Payment />
    </ThemeProvider>
  )
}

export default App
