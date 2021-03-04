import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { themeStyles } from '../../styles'

import { setActivePage } from '../../store/app/appData/actions'

import {
  ApplicationState,
  AppDispatch,
  AppData,
  PageTypes
} from '../../store/types'

import {
  Remote,
  Home as HomeConfig,
  App
} from '../../config'

import {
  Login,
  RegisterReferral,
  RegisterPassword
} from '.'

interface HomeProps {
  page: PageTypes
}

interface StateProps {
  appData: AppData
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
}

type Props = HomeProps & StateProps & DispatchProps

const display = (props: Props) => {

  const [page, setPage] = useState(PageTypes.NONE)
  let isFirstRun = useRef(true)
  const classes = themeStyles()

  useEffect(() => {

    if ( isFirstRun.current ) {

      if ( props.page != PageTypes.NONE ) {

        props.setActivePage(props.page)

      }
      isFirstRun.current = false

    } else {

      setPage(props.appData.activePage)

      //console.log("Page: ", props.appData.activePage)
    }

  }, [props.appData])

  return (

    <Grid item container alignItems="flex-start" xs={12}>

      <Grid className={classes.leftContent} item container alignItems="center" justify="flex-start" xs={6}>

        <Typography variant="h1">
          {HomeConfig.heading}
          <br/>
          {HomeConfig.subHeading}
          <br/>
          <span style={{color: 'red' }}>{App.appName}<br/></span>
        </Typography>

        <Grid item container xs={12}>
          <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 2000 4"
          >
            <line x2="2000" stroke="#317aff" strokeWidth={4} />
          </svg>
        </Grid>

        <Typography variant="body1">
          <br/>
          {HomeConfig.info} {HomeConfig.moreInfo} <a href={App.website}>{App.website}</a>.<br/><br/>
          {HomeConfig.infoSecond}<br/><br/>
          {HomeConfig.infoThird}<br/><br/>
          {HomeConfig.infoFourth}<br/><br/>
          {HomeConfig.infoFifth}
        </Typography>

      </Grid>

      <Grid className={classes.rightContent} item container  alignItems="center" justify="center" xs={6}>

        { page == PageTypes.REGISTER ?

            <RegisterReferral />

        : (

          page == PageTypes.REGISTERPASSWORD ?

              <RegisterPassword />

            : (

              <Login />
            )

        )}

      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { appData: state.appData.data }
}


const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page))
 }
}

export const Home = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)
