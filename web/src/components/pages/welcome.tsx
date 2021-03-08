import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import ReactTooltip from 'react-tooltip'

import firstDivide from '../../images/firstDivide.svg'
import secondDivide from '../../images/secondDivide.svg'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  PageTypes,
  User
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'

import {
  App,
  Remote,
  Local,
  Help,
  Welcome as WelcomeConfig,
  Home
} from '../../config'

interface StateProps {
  user: User
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
}

type Props = StateProps & DispatchProps

const display = (props: Props) => {

  const history = useHistory()

  const theme = useTheme()
  const breakpoints = useMediaQuery(theme.breakpoints.up('lg')) ? 6 : 12
  const classes = themeStyles()

  useEffect(() => {

    if ( !props.user.info.id ) {

      props.setActivePage(PageTypes.SIGNIN)
      history.push(`${Local.home}`)

    }

  }, [props.user])

  return (

    <Grid item container alignItems="flex-start">
      <Grid className={classes.leftContent} item container justify="flex-start" xs={breakpoints}>

        <Typography variant="h1">
          <span style={{color: 'red' }}>{App.title}</span> {WelcomeConfig.info}
        </Typography>

        <Typography variant="body1">
          <br/><br/>
          {WelcomeConfig.moreInfo} <a className={classes.activeLink} href={App.website}>{App.website}</a>.<br/>
          {WelcomeConfig.infoThird}
        </Typography>

        <Typography variant="h3">
          {WelcomeConfig.heading}<br/><br/>
        </Typography>

      </Grid>

      <Grid className={classes.rightContent} item container xs={breakpoints}>

        <Grid item container justify="flex-start" xs={12}>

          <Typography variant="h2">
            {WelcomeConfig.subHeading}
          </Typography>

        </Grid>

        <Grid item container justify="flex-start" xs={12}>

          <Typography variant="h4">
            {WelcomeConfig.downloadAPK} <a href={Remote.aPKVideo}>{Remote.aPKVideo}</a>.<br/><br/>
          </Typography>

        </Grid>

        <Grid item container justify="center">

          <a href={Remote.aPKURL} style={{textDecoration: 'none'}}>
            <Button
              className={classes.submitButton}
              color="primary"
              aria-label={Help.downloadTip}
              size="medium"
              variant="contained"
              data-for='download'
              data-tip
              style={{
                textTransform: 'none',
                fontSize: "1em",
              }}
            >
              {WelcomeConfig.aPKButton}
            </Button>
            <ReactTooltip
              id='download'
              place="top"
              effect="solid"
            >
              {Help.downloadTip}
            </ReactTooltip>
          </a>

        </Grid>

        <Grid item container justify="flex-start" xs={12}>

          <Typography variant="h4">
            <br/>
            {WelcomeConfig.downloadMiniDapp} <a href={Remote.miniDappVideo}>{Remote.miniDappVideo}</a>.<br/><br/>
          </Typography>

        </Grid>

        <Grid item container justify="center">

          <a href={Remote.miniDappURL} style={{textDecoration: 'none'}}>
            <Button
              className={classes.submitButton}
              color="primary"
              aria-label={Help.downloadTip}
              size="medium"
              variant="contained"
              data-for='download'
              data-tip
              style={{
                textTransform: 'none',
                fontSize: "1em",
              }}
            >
              {WelcomeConfig.miniDappButton}
            </Button>
            <ReactTooltip
              id='download'
              place="top"
              effect="solid"
            >
              {Help.downloadTip}
            </ReactTooltip>
          </a>

        </Grid>

        <Grid item container justify="flex-start" xs={12}>

          <Typography variant="h4">
            <br/>
            {WelcomeConfig.infoSecond}<br />
          </Typography>

        </Grid>

      </Grid>
    </Grid>
  )
}

/*
<Grid item container xs={12}>
  <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 2000 4"
  >
    <line x2="2000" stroke="#317aff" strokeWidth={4} />
  </svg>
</Grid>
*/

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    user: state.userData.data as User
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page))
 }
}

export const Welcome = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)
