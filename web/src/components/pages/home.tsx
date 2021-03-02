import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { themeStyles } from '../../styles'

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

type Props = HomeProps & StateProps

const display = (props: Props) => {

  const [page, setPage] = useState(props.page)

  const classes = themeStyles()

  useEffect(() => {

    setPage(props.appData.activePage)

  }, [props.appData])

  //console.log("Got page set: ", props.appData.activePage)

  return (

    <>

      <Grid className={classes.leftContent} item container alignItems="flex-start" justify="flex-start" xs={6}>

        <Typography variant="h1">
          {HomeConfig.heading}
          <br/>
          {HomeConfig.subHeading}
          <br/>
          <span style={{color: 'red' }}>{App.appName}<br/></span>
        </Typography>

        <Grid item container justify="center" xs={12}>
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

      <Grid  className={classes.rightContent} item container  alignItems="center" justify="center" xs={6}>

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
    </>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return { appData: state.appData.data }
}

export const Home = connect<StateProps, {}, {}, ApplicationState>(
  mapStateToProps
)(display)
