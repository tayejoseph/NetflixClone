import { React } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './base/globalStyles'
import { IconContext } from 'react-icons'
import theme from './base/theme'
import { Auth } from './View'

const App = () => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <IconContext.Provider value={{ className: 'icon' }}>
        <Switch>
          <Route path="/auth" component={Auth} />
        </Switch>
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
