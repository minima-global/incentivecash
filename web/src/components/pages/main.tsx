import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'

import GoogleFontLoader from 'react-google-font-loader'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ReactTooltip from 'react-tooltip'

import logoutIcon from '../../images/logout01.svg'
import minimaIcon from '../../images/minimaIcon.svg'

import { Content } from '../content'

import { App } from '../../config/strings'

import {
  ApplicationState,
  AppDispatch,
  AppDataProps,
  AppData,
  PageTypes
 } from '../../store'

import { setActivePage } from '../../store/app/appData/actions'
import { initUser } from '../../store/app/server/actions'

import { themeStyles } from '../../styles'

import { Paths, Local, Help, User } from '../../config'

interface StateProps {
  appData: AppData
}

interface DispatchProps {
  initUser: () => void
  setActivePage: (page: PageTypes) => void
}

type Props = StateProps & DispatchProps

const display = (props: Props) => {

  const history = useHistory()
  const classes = themeStyles()

  const logOut = () => {

    props.initUser()
    props.setActivePage(PageTypes.SIGNIN)
    history.push(`${Local.home}`)
  }

  return (

    <Grid className={classes.root}>

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

          <Grid item container justify="flex-end" alignItems="center" className={classes.header} xs={12}>

            <Button
              onClick={() => logOut()}
              color="primary"
              data-for='logoutButton'
              data-tip
              style={{
                textTransform: 'none',
                fontSize: '0.8em'
              }}
            >
              <Typography style={{color: 'white'}} variant="h5">
                {Paths.signOut}
              </Typography>
            </Button>
            <ReactTooltip
              id='logoutButton'
              place="bottom"
              effect="solid"
            >
              {Help.logoutTip}
            </ReactTooltip>

          </Grid>

          <Grid className={classes.contentWelcome} alignItems="flex-start" item container xs={12}>
            <Content />
          </Grid>

        </>

      : (

        <>

          <Grid item container justify="center" alignItems="center" className={classes.header} xs={12}>

            <Typography variant="caption">
              &nbsp;
            </Typography>

          </Grid>

          <Grid className={classes.contentHome} alignItems="flex-start" item container xs={12}>
            <Content />
          </Grid>

        </>

      )}


      <Grid item container className={classes.footer} xs={12}>

        <Grid item container alignItems="center" justify="flex-start" xs={6}>

          <Typography variant="caption">
            {App.catchLine}<br />
            {App.copyright}
          </Typography>

        </Grid>

        <Grid item container  alignItems="center" justify="flex-end" xs={6}>

          <img className={classes.appIcon} src={minimaIcon} />

        </Grid>

      </Grid>

    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { appData: state.appData.data }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   initUser: () => dispatch(initUser()),
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page))
 }
}

export const Main = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)
