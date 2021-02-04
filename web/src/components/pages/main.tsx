import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'

import GoogleFontLoader from 'react-google-font-loader'

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Fade from '@material-ui/core/Fade'

import { Content } from '../content'
import { App } from '../../config/strings'

import {
  ApplicationState,
  AppDispatch,
  AppDataProps,
  AppData } from '../../store'

import IconButton from '@material-ui/core/IconButton'

import ReactTooltip from 'react-tooltip'

import helpIcon from '../../images/helpIcon.svg'
import helpActiveIcon from '../../images/helpActiveIcon.svg'
import infoIcon from '../../images/infoIcon.svg'
import infoActiveIcon from '../../images/infoActiveIcon.svg'
import contactIcon from '../../images/contactIcon.svg'
import contactActiveIcon from '../../images/contactActiveIcon.svg'

import homeIcon from '../../images/homeIcon.svg'
import homeActiveIcon from '../../images/homeActiveIcon.svg'
import userIcon from '../../images/userIcon.svg'
import userActiveIcon from '../../images/userActiveIcon.svg'
import rewardIcon from '../../images/rewardIcon.svg'
import rewardActiveIcon from '../../images/rewardActiveIcon.svg'
import referralIcon from '../../images/referralIcon.svg'
import referralActiveIcon from '../../images/referralActiveIcon.svg'

//import logoIcon from '../../images/logo.svg'
import minimaIcon from '../../images/minimaLogo.png'

import { themeStyles, themeStylesMobile } from '../../styles'

import { Paths, Local, Help } from '../../config'

interface MainStateProps {
  appData: AppData
}

type Props =  MainStateProps

const main = (props: Props) => {

  const [icons, setIcons] = useState([homeActiveIcon, userIcon, helpIcon, infoIcon, contactIcon, rewardIcon, referralIcon])

  const classes = isMobile ? themeStylesMobile() : themeStyles()

  useEffect(() => {

    //console.log("main with: ", props.appData.activePage)
    if ( props.appData.activePage === Local.home ) {

      setIcons([homeActiveIcon, userIcon, helpIcon, infoIcon, contactIcon, rewardIcon, referralIcon])

    } else if ( props.appData.activePage === Local.user ) {

      setIcons([homeIcon, userActiveIcon, helpIcon, infoIcon, contactIcon, rewardIcon, referralIcon])

    } else if ( props.appData.activePage === Local.help ) {

      setIcons([homeIcon, userIcon, helpActiveIcon, infoIcon, contactIcon, rewardIcon, referralIcon])

    } else if ( props.appData.activePage === Local.about ) {

      setIcons([homeIcon, userIcon, helpIcon, infoActiveIcon, contactIcon, rewardIcon, referralIcon])

    } else if ( props.appData.activePage === Local.contact ) {

      setIcons([homeIcon, userIcon, helpIcon, infoIcon, contactActiveIcon, rewardIcon, referralIcon])

    } else if ( props.appData.activePage === Local.reward ) {

      setIcons([homeIcon, userIcon, helpIcon, infoIcon, contactIcon, rewardActiveIcon, referralIcon])

    } else if ( props.appData.activePage === Local.referral ) {

      setIcons([homeIcon, userIcon, helpIcon, infoIcon, contactIcon, rewardIcon, referralActiveIcon])

    }
  }, [props.appData])

  return (

    <Grid className={classes.root}>

      <GoogleFontLoader
        fonts={[
          {
            font: 'Manrope',
            weights: [300, 400, 500, 600, 700],
          },
          {
            font: 'Roboto',
            weights: [300, 400, 500, 600, 700],
          }
        ]}
      />

      <Grid item container className={classes.header} xs={12}>

        <Grid item container justify="flex-start" xs={6}>
          <img className={classes.headerIcon} src={minimaIcon}/>
        </Grid>

        <Grid item container justify="space-between" xs={6}>

            <NavLink to={Local.help} className={classes.link}>
              <IconButton
                color="primary"
                aria-label="Help"
                component="span"
                size="small">
                <img
                  data-for={helpIcon}
                  data-tip
                  src={icons[2]}
                  className={classes.helpIcon}
                />
              </IconButton>
              <ReactTooltip
                id={helpIcon}
                place="bottom"
                effect="solid"
              >
                {Help.helpTip}
              </ReactTooltip>
            </NavLink>

            <NavLink to={Local.contact} className={classes.link}>
              <IconButton
                color="primary"
                aria-label="Contact"
                component="span"
                size="small">
                <img
                  data-for={contactIcon}
                  data-tip
                  src={icons[4]}
                  className={classes.contactIcon}
                />
              </IconButton>
              <ReactTooltip
                id={contactIcon}
                place="bottom"
                effect="solid"
              >
                {Help.contactTip}
              </ReactTooltip>
            </NavLink>

            <NavLink to={Local.about} className={classes.link}>
              <IconButton
                color="primary"
                aria-label="Info"
                component="span"
                size="small">
                <img
                  data-for={infoIcon}
                  data-tip
                  src={icons[3]}
                  className={classes.aboutIcon}
                />
              </IconButton>
              <ReactTooltip
                id={infoIcon}
                place="bottom"
                effect="solid"
              >
                {Help.aboutTip}
              </ReactTooltip>
            </NavLink>
        </Grid>

      </Grid>

      <Grid className={classes.content} alignItems="flex-start" item container xs={12}>
        <Content />
      </Grid>

      <Grid item container className={classes.footer} justify="center" xs={12}>

        <Grid item container justify="center" xs={2}>

         <NavLink to={Local.home}>
            <IconButton
             color="primary"
             aria-label={Help.homeTip}
             component="span"
             size="small">
             <img
              data-for={homeIcon}
              data-tip
              src={icons[0]}
              className={classes.footerIcon}
            />
            </IconButton>
            <ReactTooltip
              id={homeIcon}
              place="top"
              effect="solid"
            >
              {Help.homeTip}
            </ReactTooltip>
         </NavLink>

        </Grid>

        <Grid item container justify="center" xs={2}>

         <NavLink to={Local.user}>
            <IconButton
             color="primary"
             aria-label={Help.userTip}
             component="span"
             size="small">
             <img
              data-for={userIcon}
              data-tip
              src={icons[1]}
              className={classes.footerIcon}
            />
            </IconButton>
            <ReactTooltip
              id={userIcon}
              place="top"
              effect="solid"
            >
              {Help.userTip}
            </ReactTooltip>
         </NavLink>

        </Grid>

        <Grid item container justify="center" xs={2}>

         <NavLink to={Local.reward}>
            <IconButton
             color="primary"
             aria-label={Help.rewardTip}
             component="span"
             size="small">
             <img
              data-for={rewardIcon}
              data-tip
              src={icons[5]}
              className={classes.footerIcon}
            />
            </IconButton>
            <ReactTooltip
              id={rewardIcon}
              place="top"
              effect="solid"
            >
              {Help.rewardTip}
            </ReactTooltip>
         </NavLink>

        </Grid>

        <Grid item container justify="center" xs={2}>

         <NavLink to={Local.referral}>
            <IconButton
             color="primary"
             aria-label={Help.referralTip}
             component="span"
             size="small">
             <img
              data-for={referralIcon}
              data-tip
              src={icons[6]}
              className={classes.footerIcon}
            />
            </IconButton>
            <ReactTooltip
              id={referralIcon}
              place="top"
              effect="solid"
            >
              {Help.referralTip}
            </ReactTooltip>
         </NavLink>

        </Grid>

      </Grid>

    </Grid>
  )
}

const mainNav = (props: Props) => {

  let path = window.location.href
  const indexOf = path.indexOf("index")
  if (indexOf > -1) {
      const redirect = path.substr(0, indexOf)
      window.location.href = redirect
  }

  return main(props)
}

const mapStateToProps = (state: ApplicationState): MainStateProps => {
  return { appData: state.appData.data }
}

export const Main = connect<MainStateProps, {}, {}, ApplicationState>(
  mapStateToProps
)(mainNav)
