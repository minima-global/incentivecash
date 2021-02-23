import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import { theme } from '../styles'
import { Main } from './pages'

const Root = ({ store }: any) => {

  return (

    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <Main />
          </HashRouter>
        </ThemeProvider>
    </Provider>
  )
}

export default Root
