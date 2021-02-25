import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import {
  Login,
  Welcome,
  Info,
  User,
  Reward
} from '../components/pages'

import { Paths, Local } from '../config'

export const UserContent = () => {

  return (

    <Switch>

      <Route name={Paths.welcome} path={Local.welcome} render={() => <Welcome />} />

      <Route name={Paths.help} exact path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
      <Route name={Paths.contact} exact path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />
      <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />

      <Route name={Paths.reward} exact path={Local.reward} render={() => <Reward />} />
      <Route name={Paths.user} exact path={Local.user} render={() => <User />} />

      <Route name={Paths.signIn} path={Local.signIn} render= {() => <Login />} />

    </Switch>
  )
}
