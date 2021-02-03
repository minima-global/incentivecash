import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  User as UserData,
  Collection
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { getUser, getCollection } from '../../store/app/server/actions'

import { getKeyedList } from '../../utils'

import {
  Local,
  Remote,
  GeneralError,
  Help,
  User as UserConfig,
  Misc } from '../../config'

interface StateProps {
  user: UserData
  collection: Collection
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getUser: () => void
  getCollection: (url: string) => void
}

type Props = StateProps & DispatchProps

export const user = (props: Props) => {

  const [user, setUser] = useState([] as string[])
  const [rewards, setRewards] = useState([] as string[])
  let isFirstRun = useRef(true)

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.user)
      isFirstRun.current = false
      props.getUser()

    } else if (props.user.info && !user.length) {

      const user = getKeyedList(props.user.info)
      setUser(user)
      console.log("User!", props.user.info)

      //const id = props.user.info.id as string

      const rewardURL = `${Remote.serverURL}${Remote.itemsPath}${Remote.rewardsPath}?filter={ "Userid": { "_eq": "8fced3eb-e945-4291-b558-acc54e3fd4e6" }}`

      props.getCollection(rewardURL)

    } else if (props.collection.info) {

      const rewards = getKeyedList(props.collection.info)
      setRewards(rewards)
      console.log("Rewards! ", rewards)
    }

  }, [props.user, props.collection])

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {UserConfig.userHeading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
      </Grid>
      <Grid>
        <ul>
          {user.map((item, index) => {

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
    user: state.userData.data as UserData,
    collection: state.collectionData.data as Collection
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page)),
   getUser: () => dispatch(getUser()),
   getCollection: (url: string) => dispatch(getCollection(url))
 }
}

export const User = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(user)
