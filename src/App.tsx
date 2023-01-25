import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
