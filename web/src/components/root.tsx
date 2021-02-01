import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import { isMobile } from "react-device-detect"

import { theme, themeMobile } from '../styles'
import { Main } from './pages'

const Root = ({ store }: any) => {

  const appTheme = isMobile ? themeMobile : theme

  return (

    <Provider store={store}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <HashRouter>
            <Main />
          </HashRouter>
        </ThemeProvider>
    </Provider>
  )
}

export default Root
