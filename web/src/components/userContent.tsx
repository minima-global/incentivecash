import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoTypes } from '../store/types'

import {
  Login,
  Info,
  User,
  Reward,
  Referral } from '../components/pages'

import { Paths, Local } from '../config'

export const UserContent = () => {

  return (

    <Switch>

      <Route name={Paths.help} exact path={Local.help} render={() => <Info type={InfoTypes.HELP}/>} />
      <Route name={Paths.contact} exact path={Local.contact} render={() => <Info type={InfoTypes.CONTACT}/>} />
      <Route name={Paths.about} exact path={Local.about} render={() => <Info type={InfoTypes.ABOUT}/>} />

      <Route name={Paths.rewardUser} exact path={Local.rewardUser} render={() => <Reward />} />
      <Route name={Paths.referralUser} exact path={Local.referralUser} render={() => <Referral />} />

      <Route name={Paths.home} exact path={Local.home} render= {() => <Login />} />

      <Route name={Paths.user} path={Local.user} render={() => <User />} />

    </Switch>
  )
}
