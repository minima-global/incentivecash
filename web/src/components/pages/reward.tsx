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

  const [reward, setReward] = useState([] as string[][])
  //const { id } = useParams<{ id: string }>()
  let isFirstRun = useRef(true)

  const classes = themeStyles()

  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    dbase = Remote.devDbaseServerURL
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.reward)
      isFirstRun.current = false
      const rewardURL = `${dbase}${Remote.itemsPath}${Remote.rewardsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`

      props.getCollection(rewardURL)

    } else if (props.collection.info && !reward.length) {

      let currentRewards = []
      for (let item of props.collection.info) {

        const thisReward = getKeyedList(item)
        //currentRewards.push(...thisReward)
        currentRewards.push(thisReward)
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
        <img src={hrFirst} className={classes.hr}/>
      </Grid>
      <Grid item container justify="flex-start" xs={12}>
        {reward.map((rewardItem, index) => {

            let thisItem = rewardItem.map((item) => {

            return (
              <Grid item container justify="flex-start" xs={12}>
                {item}
              </Grid>
            )
          })

          return (
            <Grid item container justify="flex-start" xs={12}>
              <Typography variant="h3">
                Reward {index + 1}
              </Typography>
              {thisItem}
            </Grid>
          )

        })}
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
