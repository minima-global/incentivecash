import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import hrFirst from '../../images/hrFirst.svg'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  User as UserData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { getUser } from '../../store/app/server/actions'

import { getKeyedList } from '../../utils'

import {
  Local,
  Remote,
  GeneralError,
  Help,
  User as UserConfig,
  Misc } from '../../config'

interface StateProps {
  user: UserData
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getUser: () => void
}

type Props = StateProps & DispatchProps

const user = (props: Props) => {

  const [user, setUser] = useState([] as string[])
  let isFirstRun = useRef(true)
  const history = useHistory()

  const classes = themeStyles()

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.user)
      isFirstRun.current = false
      props.getUser()

    } else if (props.user.info && !user.length) {

      const userDetails = getKeyedList(props.user.info)
      setUser(userDetails)
    }

  }, [props.user])

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {UserConfig.userHeading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hrFirst} className={classes.hr}/>
      </Grid>
      <Grid item container justify="flex-start" xs={12}>
        {user.map((item) => {

          return (
            <Grid item container justify="flex-start" xs={12}>
              {item}
            </Grid>
          )
        })}
      </Grid>

    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    user: state.userData.data as UserData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page)),
   getUser: () => dispatch(getUser())
 }
}

export const User = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(user)
