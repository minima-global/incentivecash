import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
//import { useParams } from 'react-router-dom'

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

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

  const [reward, setReward] = useState([] as string[])
  //const { id } = useParams<{ id: string }>()
  let isFirstRun = useRef(true)

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.reward)
      isFirstRun.current = false
      const rewardURL = `${Remote.serverURL}${Remote.itemsPath}${Remote.rewardsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`

      props.getCollection(rewardURL)

    } else if (props.collection.info && !reward.length) {

      let currentRewards = []
      for (let item of props.collection.info) {

        const thisReward = getKeyedList(item)
        console.log("this: ", thisReward)
        currentRewards.push(...thisReward)
      }

      setReward(currentRewards)
      //console.log("asdfsadf: ", reward)
    }

  }, [props.collection])

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {RewardConfig.heading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
      </Grid>
      <Grid item container justify="flex-start" xs={12}>
        <ul>
          {reward.map((item, index) => {

            return (
              <React.Fragment key={index}>
                  <li>{item}</li>
              </React.Fragment>
            )
          })}
        </ul>
      </Grid>
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
