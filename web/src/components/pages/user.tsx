import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  User as UserData,
  UserProps
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { getUser } from '../../store/app/server/actions'

import { Local, GeneralError, Help, User as UserConfig, Misc } from '../../config'

interface StateProps {
  user: UserData
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getUser: () => void
}

type Props = StateProps & DispatchProps

export const user = (props: Props) => {

  const [user, setUser] = useState({})
  let isFirstRun = useRef(true)

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  props.setActivePage(Local.user)

  useEffect(() => {

    if ( isFirstRun.current ) {

        isFirstRun.current = false
        props.getUser()

    } else if (props.user.info) {

      setUser(props.user.info)
      console.log("User!", props.user.info)
    }

  }, [props.user])


  return (
    <p>
      blah
    </p>
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
