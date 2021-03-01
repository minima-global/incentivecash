import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
//import { useParams } from 'react-router-dom'

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
  Remote,
  Help,
  Home
} from '../../config'

interface StateProps {
  user: User
}

interface DispatchProps {
  setActivePage: () => void
}

type Props = StateProps & DispatchProps

const display = (props: Props) => {

  const classes = themeStyles()

  useEffect(() => {

    if ( !props.user.info.id ) {

      // redirect to <Home>

    }

  }, [props.user])

  return (

    <Grid container justify="center" alignItems="flex-start">

      <Grid item container justify="center" className={classes.details} xs={7}>
        <Typography align="center" variant="h2">
          {Home.heading}
        </Typography>
      </Grid>

      <Grid item container justify="center" xs={7}>
        <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 2000 4"
        >
          <line x2="2000" stroke="#317aff" strokeWidth={4} />
        </svg>
      </Grid>

      <Grid item container justify="center" className={classes.details} xs={7}>
        <Typography align="center" variant="h3">
          {Home.downloadInfo}
        </Typography>
      </Grid>

      <Grid item container justify="center" className={classes.details} xs={6}>
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
            {Home.downloadMiniDapp}
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


    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    user: state.userData.data as User
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: () => dispatch(setActivePage(PageTypes.WELCOME))
 }
}

export const Welcome = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)
