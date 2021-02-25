import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import {
  Login,
  Welcome,
  RegisterReferral,
  RegisterPassword
} from '../components/pages'

import { Paths, Local } from '../config'

export const LoggedOutContent = () => {

  return (

    <Switch>

      <Route name={Paths.welcome} exact path={Local.welcome} render={() => <Welcome />} />
      <Route name={Paths.register} exact path={Local.register} render={() => <RegisterReferral />} />
      <Route name={Paths.registerReferral} exact path={Local.registerReferral} render={() => <RegisterReferral />} />
      <Route name={Paths.registerEmail} exact path={Local.registerEmail} render={() => <RegisterPassword />} />
      <Route name={Paths.registerEmailUID} exact path={Local.registerEmailUID} render={() => <RegisterPassword />} />

      <Route name={Paths.home} path={Local.home} render= {() => <Login />} />

    </Switch>
  )
}
