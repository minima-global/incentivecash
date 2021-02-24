import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import ReactTooltip from 'react-tooltip'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import hrFirst from '../../images/hrFirst.svg'
import nameIcon from '../../images/nameIcon.svg'
import passwordIcon from '../../images/passwordIcon.svg'
import lastAccessIcon from '../../images/lastAccessIcon.svg'
import referralIcon from '../../images/referralIcon.svg'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  User as UserData,
  Collection
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { getCollection } from '../../store/app/server/actions'
import { getKeyedList } from '../../utils'

import {
  Local,
  Remote,
  GeneralError,
  Home,
  Help,
  User as UserConfig,
  Misc } from '../../config'

interface StateProps {
  user: UserData
  collection: Collection
}

interface DispatchProps {
  setActivePage: (page: string) => void
  getCollection: (url: string) => void
}

type Props = StateProps & DispatchProps

const user = (props: Props) => {

  const [referral, setReferral] = useState([] as string[])
  let isFirstRun = useRef(true)
  const history = useHistory()

  const classes = themeStyles()

  let web = Remote.prodHttpsServerURL
  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    web = Remote.devHttpsServerURL
    dbase = Remote.devDbaseServerURL
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.user)
      isFirstRun.current = false
      const referralURL = `${dbase}${Remote.itemsPath}${Remote.referralsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`

      props.getCollection(referralURL)

    } else if ( props.collection.info && props.user.info.id ) {

      let currentReferrals = []
      let userReferralURL = ""

      for (let item of props.collection.info) {

        const thisItem: any = item as any
        if ( thisItem.hasOwnProperty('name')) {
          userReferralURL += `${web}/#${Local.register}/${props.user.info.id}/${thisItem.name}`
        }
        currentReferrals.push(userReferralURL)
      }

      setReferral(currentReferrals)
    }

  }, [props.collection])

  const copyReferral = (id: string) => {

    const copyText = document.getElementById(id) as HTMLInputElement

    if ( copyText ) {

      copyText.select()
       /* For mobile devices */
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy")
    }
  }

  return (

    <Grid container alignItems="flex-start">

      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {UserConfig.userHeading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hrFirst} className={classes.hr}/>
        <br /><br />
      </Grid>

      <Grid item container justify="flex-start" xs={12}>

        <Grid item container justify="flex-start" alignItems="center" xs={2}>
          <img src={nameIcon} className={classes.userIcon}/>
        </Grid>
        <Grid item container justify="flex-start" xs={10}>
          <Grid item container justify="flex-start" xs={12}>
            <Typography variant="h4">
              {props.user.info.first_name? props.user.info.first_name: `${UserConfig.first}`}
            </Typography>
          </Grid>
          <Grid item container justify="flex-start" xs={12}>
            <Typography variant="h4">
              {props.user.info.last_name? props.user.info.last_name: `${UserConfig.last}`}
            </Typography>
          </Grid>
        </Grid>

      </Grid>

      <Grid item container justify="center" xs={12}>
        <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 2000 4"
        >
          <line x2="2000" stroke="#317aff" strokeWidth={4} />
        </svg>
      </Grid>

      <Grid item container justify="flex-start" xs={12}>

        <Grid item container justify="flex-start" alignItems="center" xs={2}>
          <img src={passwordIcon} className={classes.userIcon}/>
        </Grid>

        <Grid item container justify="flex-start" xs={10}>
          <div>
            <Typography variant="h4">
              {UserConfig.password}
            </Typography>
            <Typography variant="h4">
              {props.user.info.password}
            </Typography>
          </div>
        </Grid>

      </Grid>

      <Grid item container justify="center" xs={12}>
        <svg
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 2000 4"
        >
          <line x2="2000" stroke="#317aff" strokeWidth={4} />
        </svg>
      </Grid>

      <Grid item container justify="flex-start" xs={12}>

        <Grid item container justify="flex-start" alignItems="center" xs={2}>
          <img src={lastAccessIcon} className={classes.userIcon}/>
        </Grid>

        <Grid item container justify="flex-start" xs={10}>
          <div>
            <Typography variant="h4">
              {UserConfig.lastAccess}
            </Typography>
            <Typography variant="h4">
              {props.user.info.last_access}
            </Typography>
          </div>
        </Grid>

      </Grid>

      {referral.length ?

        <Grid container justify="center" alignItems="flex-start">

          <Grid item container justify="center" xs={12}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 2000 4"
            >
              <line x2="2000" stroke="#317aff" strokeWidth={4} />
            </svg>
          </Grid>

          <Grid item container justify="flex-start" xs={12}>

            <Grid item container justify="flex-start" alignItems="center" xs={2}>
              <img src={referralIcon} className={classes.userIcon}/>
            </Grid>

            {referral.map((item, index) => {

              const copyId = "referral" + index

              return (

                <React.Fragment key={index}>

                  <Grid item container justify="center" alignItems="flex-start" xs={10}>

                    <Grid item container justify="flex-start" xs={12}>
                      <input type="text" value={item} id={copyId} readOnly/>
                    </Grid>

                    <Grid item container justify="flex-start" xs={12}>
                      <div>
                        <Button
                          onClick={() => copyReferral(copyId)}
                          className={classes.submitButton}
                          color="primary"
                          aria-label={Help.downloadTip}
                          size="medium"
                          variant="contained"
                          data-for='referral'
                          data-tip
                          style={{
                            textTransform: 'none',
                            fontSize: "1em",
                          }}
                        >
                          {Home.referralCopy}
                        </Button>
                        <ReactTooltip
                          id='referral'
                          place="top"
                          effect="solid"
                        >
                          {Help.referralCopyTip}
                        </ReactTooltip>

                      </div>

                    </Grid>

                  </Grid>
                </React.Fragment>
              )
            })}

          </Grid>

        </Grid>

        : null

      }

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
   getCollection: (url: string) => dispatch(getCollection(url))
 }
}

export const User = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(user)
