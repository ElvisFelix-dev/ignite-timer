import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>Timer</h1>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

