import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import {
  Login,
  User,
  RegisterReferral,
  RegisterPassword
} from '../components/pages'

import { Paths, Local } from '../config'

export const LoggedOutContent = () => {

  return (

    <Switch>

      <Route name={Paths.user} exact path={Local.user} render={() => <User />} />
      <Route name={Paths.register} exact path={Local.register} render={() => <RegisterReferral />} />
      <Route name={Paths.registerReferral} exact path={Local.registerReferral} render={() => <RegisterReferral />} />
      <Route name={Paths.registerPassword} exact path={Local.registerPassword} render={() => <RegisterPassword />} />
      <Route name={Paths.registerPasswordReferral} exact path={Local.registerPasswordReferral} render={() => <RegisterPassword />} />

      <Route name={Paths.home} path={Local.home} render= {() => <Login />} />

    </Switch>
  )
}
