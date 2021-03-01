import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  AppData,
  PageTypes
} from '../../store/types'

import { Remote } from '../../config'

import {
  Login,
  RegisterReferral,
  RegisterPassword,
} from '.'

interface StateProps {
  appData: AppData
}

type Props = StateProps

const display = (props: Props) => {

  const classes = themeStyles()

  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    dbase = Remote.devDbaseServerURL
  }

  return (

    <Grid container alignItems="flex-start">

      { props.appData.activePage == PageTypes.REGISTER || props.appData.activePage == PageTypes.REGISTERREFERRAL ?

        <RegisterReferral />
      : (

        props.appData.activePage == PageTypes.REGISTERPASSWORD ?

          <RegisterPassword />

          : (

            <Login />
          )

      )}
    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { appData: state.appData.data }
}

export const Home = connect<StateProps, {}, {}, ApplicationState>(
  mapStateToProps
)(display)
