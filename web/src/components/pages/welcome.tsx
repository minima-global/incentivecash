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
  Home,
  Referral,
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

const welcomeInfo = (props: Props) => {

  const [referral, setReferral] = useState([] as string[])
  let isFirstRun = useRef(true)

  const classes = themeStyles()

  let web = Remote.prodHttpsServerURL
  let dbase = Remote.prodDbaseServerURL
  if ( process.env.NODE_ENV === 'development' ) {
    web = Remote.devHttpsServerURL
    dbase = Remote.devDbaseServerURL
  }

  useEffect(() => {

    if ( isFirstRun.current ) {

      props.setActivePage(Local.home)
      isFirstRun.current = false
      const referralURL = `${dbase}${Remote.itemsPath}${Remote.referralsPath}?filter={ "Userid": { "_eq": "${props.user.info.id}" }}`

      //console.log(props.user)
      //console.log(referralURL)

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

    <Grid container justify="center" alignItems="flex-start">

      <Grid item container justify="center" xs={7}>
        <Typography align="center" variant="h2">
          <br />
          {Home.heading}
        </Typography>
      </Grid>

      <Grid item container justify="center" xs={7}>
        <div>
          <Typography variant="h3">
            <br />
          </Typography>
          <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 2000 4"
          >
            <line x2="2000" stroke="#317aff" strokeWidth={4} />
          </svg>
          <Typography variant="h3">
            <br />
          </Typography>
        </div>
      </Grid>

      <Grid item container justify="center" xs={7}>
        <Typography align="center" variant="h3">
          {Home.downloadInfo}
          <br /><br />
        </Typography>
      </Grid>

      <Grid item container justify="center" xs={6}>
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

      {referral.length ?

        <Grid container justify="center" alignItems="flex-start">

          <Grid item container justify="center" xs={7}>
            <div>
              <Typography variant="h3">
                <br />
              </Typography>
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 2000 4"
              >
                <line x2="2000" stroke="#C8C8D4" strokeWidth={4} />
              </svg>
              <Typography align="center" variant="h3">
                <br />
              </Typography>
            </div>
          </Grid>

          <Grid item container justify="center" xs={7}>
            <Typography align="center" variant="h3">
              {Home.referralInfo}
            </Typography>
          </Grid>

            {referral.map((item, index) => {

              const copyId = "referral" + index

              return (

                <React.Fragment key={index}>

                  <Grid item container justify="center" alignItems="flex-start" xs={12}>

                    <Grid item xs={12}>
                      <Typography variant="h3">
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item container justify="center" xs={7}>
                      <input type="text" value={item} id={copyId} readOnly/>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h3">
                        <br />
                      </Typography>
                    </Grid>

                    <Grid item container justify="center" xs={6}>
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

                    <Grid item xs={12}>
                      <Typography variant="h3">
                        <br />
                      </Typography>
                    </Grid>

                  </Grid>
                </React.Fragment>
              )
            })}

        </Grid>

        : null
      }
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

export const Welcome = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(welcomeInfo)
