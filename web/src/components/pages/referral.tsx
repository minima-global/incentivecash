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
  Referral as ReferralConfig,
  Misc
} from '../../config'

interface StateProps {
  user: User
  collection: Collection
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getCollection: (url: string) => void
}

type Props = StateProps & DispatchProps

const referralInfo = (props: Props) => {

  const [referral, setReferral] = useState([] as string[])
  let isFirstRun = useRef(true)

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  let web = Remote.prodHttpsServerURL
  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    web = Remote.devHttpsServerURL
    dbase = Remote.devDbaseServerURL
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.referral)
      isFirstRun.current = false
      const referralURL = `${dbase}${Remote.itemsPath}${Remote.referralsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`
      //const referralURL = `${dbase}${Remote.itemsPath}${Remote.referralsPath}`

      props.getCollection(referralURL)

    } else if (props.collection.info && !referral.length) {

      let currentReferrals = []
      let userReferralURL = ""

      for (let item of props.collection.info) {

        const thisItem: any = item as any
        if ( thisItem.hasOwnProperty('name')) {
          userReferralURL += `${web}/#${Local.register}/${props.user.info.id}/${thisItem.name}`
        }

        const thisReferral = getKeyedList(thisItem)
        currentReferrals.push(...thisReferral)
        currentReferrals.push(`${ReferralConfig.referralURL}: ${userReferralURL}`)
      }

      setReferral(currentReferrals)
      //console.log("asdfsadf: ", referral)
    }

  }, [props.collection])

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {ReferralConfig.heading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
      </Grid>
      <Grid item container justify="flex-start" xs={12}>
          {referral.map((item) => {

            return (
              <Grid item container justify="flex-start" xs={12}>
                {item}
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

export const Referral = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(referralInfo)
