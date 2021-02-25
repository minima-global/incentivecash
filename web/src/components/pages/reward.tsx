import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
//import { useParams } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import hrFirst from '../../images/hrFirst.svg'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  Collection,
  User
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { getCollection } from '../../store/app/server/actions'
import { getKeyedList } from '../../utils'

import {
  Local,
  Remote,
  GeneralError,
  Help,
  Reward as RewardConfig,
  Misc } from '../../config'

interface StateProps {
  user: User
  collection: Collection
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getCollection: (url: string) => void
}

type Props = StateProps & DispatchProps

const rewardInfo = (props: Props) => {

  //const { id } = useParams<{ id: string }>()
  const classes = themeStyles()

  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    dbase = Remote.devDbaseServerURL
  }

  useEffect(() => {

    props.setActivePage(Local.reward)
    const rewardURL = `${dbase}${Remote.itemsPath}${Remote.rewardsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`
    props.getCollection(rewardURL)

  }, [])

  return (

    <Grid container alignItems="flex-start">
    
      <Grid item container justify="flex-start" xs={3}>
        <Typography variant="h4">
          {RewardConfig.amount}
        </Typography>
      </Grid>
      <Grid item container justify="flex-start" xs={3}>
        <Typography variant="h4">
          {RewardConfig.reason}
        </Typography>
      </Grid>
      <Grid item container justify="flex-end" xs={6}>
        <Typography variant="h4">
          {RewardConfig.date}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hrFirst} className={classes.hr}/>
      </Grid>

      {props.collection.info.map((reward: any, index: number) => {

        return (

          <React.Fragment key={index}>

            <Grid item container justify="flex-start" xs={3}>
              <Typography variant="h6">
                {reward.amount}
              </Typography>
            </Grid>

            <Grid item container justify="flex-start" xs={3}>
              <Typography variant="h5">
                {reward.reason}
              </Typography>
            </Grid>

            <Grid item container justify="flex-end" xs={6}>
              <Typography variant="h5">
                {reward.date_created}
              </Typography>
            </Grid>

          </React.Fragment>
        )

      })}
    </Grid>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    user: state.userData.data as User,
    collection: state.collectionData.data as Collection
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page)),
   getCollection: (url: string) => dispatch(getCollection(url))
 }
}

export const Reward = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(rewardInfo)
