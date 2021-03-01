import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import GoogleFontLoader from 'react-google-font-loader'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Content } from '../content'

import { App } from '../../config/strings'

import {
  ApplicationState,
  AppDispatch,
  AppDataProps,
  AppData,
  PageTypes
 } from '../../store'

import IconButton from '@material-ui/core/IconButton'

import ReactTooltip from 'react-tooltip'

import helpIcon from '../../images/helpIcon.svg'
import helpActiveIcon from '../../images/helpActiveIcon.svg'
import infoIcon from '../../images/infoIcon.svg'
import infoActiveIcon from '../../images/infoActiveIcon.svg'
import contactIcon from '../../images/contactIcon.svg'
import contactActiveIcon from '../../images/contactActiveIcon.svg'
import logoutIcon from '../../images/logout01.svg'

import minimaIcon from '../../images/minimaIcon.svg'

import { themeStyles } from '../../styles'

import { Paths, Local, Help } from '../../config'

interface StateProps {
  appData: AppData
}

type Props = StateProps

const display = (props: Props) => {

  let path = window.location.href
  const indexOf = path.indexOf("index")
  if (indexOf > -1) {
      const redirect = path.substr(0, indexOf)
      window.location.href = redirect
  }

  const classes = themeStyles()

  return (

    <Grid className={classes.root} item container alignItems="flex-start">

      <GoogleFontLoader
        fonts={[
          {
            font: 'Manrope',
            weights: [300, 400, 500, 600, 700],
          },
          {
            font: 'Roboto',
            weights: [300, 400, 500, 600, 700],
          }
        ]}
      />

      { props.appData.activePage == PageTypes.WELCOME ?

        <>

          <Grid item container justify="center" alignItems="center" className={classes.header} xs={12}>

            <Typography variant="caption">
              {App.appName}
            </Typography>

          </Grid>

        </>

      : (

        <>

          <Grid item container justify="center" alignItems="center" className={classes.header} xs={12}>

            <Typography variant="caption">
              {App.appName} + blah
            </Typography>

          </Grid>

        </>

      )}

      <Grid className={classes.content} alignItems="flex-start" item container xs={12}>
        <Content />
      </Grid>

      <Grid item container className={classes.footer} justify="center" xs={12}>

        <Grid item container justify="center" xs={2}>

          &nbsp;

        </Grid>

      </Grid>

    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { appData: state.appData.data }
}

export const Main = connect<StateProps, {}, {}, ApplicationState>(
  mapStateToProps
)(display)
