import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './context/CycleContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
