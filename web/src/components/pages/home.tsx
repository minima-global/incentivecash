import React, { useState } from 'react'
import { connect } from 'react-redux'

import { isMobile } from "react-device-detect"

import { AppDispatch } from '../../store/types'
import { setActivePage } from '../../store/app/appData/actions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

import { Local, Home as HomeConfig } from '../../config'

interface DispatchProps {
  setActivePage: (page: string) => void
}

type Props = DispatchProps

export const home = (props: Props) => {

  const [pageData, setPageData] = useState({title: HomeConfig.heading,
  data: HomeConfig.info})

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  props.setActivePage(Local.home)

  return (
    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {pageData.title}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
      </Grid>

      { pageData.data.map( (data: string, i: number ) => {

        return (

          <React.Fragment key={i}>

            <Grid item container className={classes.details} xs={12}>
              <Typography variant="body1">
                {data}
              </Typography>
            </Grid>
          </React.Fragment>
        )

      })}
    </Grid>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page))
 }
}

export const Home = connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(home)
