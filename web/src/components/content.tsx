import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PageTypes } from '../store/types'

import {
  Home,
  Welcome,
  Info
} from '../components/pages'

import { Paths, Local } from '../config'

export const Content = () => {

  return (

    <Switch>

      <Route
        name={Paths.welcome}
        exact path={Local.welcome}
        render={() => <Welcome />}
      />

      <Route
        name={Paths.help}
        exact path={Local.help}
        render={() => <Info page={PageTypes.HELP}/>}
      />
      <Route
        name={Paths.contact}
        exact path={Local.contact}
        render={() => <Info page={PageTypes.CONTACT}/>}
      />
      <Route
        name={Paths.about}
        exact path={Local.about}
        render={() => <Info page={PageTypes.ABOUT}/>}
      />
      <Route
        name={Paths.reset}
        exact path={Local.reset}
        render={() => <Home page={PageTypes.RESET}/>}
      />
      <Route
        name={Paths.reset}
        exact path={Local.reset}
        render={() => <Home page={PageTypes.RESETPASSWORD}/>}
      />
      <Route
        name={Paths.register}
        exact path={Local.register}
        render={() => <Home page={PageTypes.REGISTER}/>}
      />
      <Route
        name={Paths.registerReferral}
        exact path={Local.registerReferral}
        render={() => <Home page={PageTypes.REGISTER}/>}
      />
      <Route
        name={Paths.registerEmail}
        exact path={Local.registerEmail}
        render={() => <Home page={PageTypes.REGISTERPASSWORD}/>}
      />
      <Route
        name={Paths.registerEmailUID}
        exact path={Local.registerEmailUID}
        render={() => <Home page={PageTypes.REGISTERPASSWORD}/>}
      />

      <Route
        name={Paths.home}
        path={Local.home}
        render= {() => <Home page={PageTypes.SIGNIN}/>}
      />

    </Switch>
  )
}
