import React from 'react'

import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

let themeMobile = createMuiTheme ({
  spacing: 8,
  typography: {
    fontFamily: [
      'Manrope',
      'Roboto',
      'Arial',
      'sans-serif',
      '-apple-system',
    ].join(','),
    fontSize: 1,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      lineHeight: "2",
      fontSize:  "1.8em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32',
    },
    h2: {
      lineHeight: "2.3",
      fontSize: "1.4em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    },
    h3: {
      lineHeight: '1.2',
      fontSize: "1em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    },
    h4: {
      lineHeight: '1.2',
      fontSize: "0.9em",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#317aff'
    },
    h5: {
      lineHeight: "1",
      fontSize: "0.9em",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    },
    h6: {
      lineHeight: "1.2",
      fontSize: "0.9em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    },
    subtitle1: {
      lineHeight: "2.5",
      fontSize: "1em",
      fontWeight: 600,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#FFFFFF'
    },
    subtitle2: {
      lineHeight: "1",
      fontSize: "1em",
      fontWeight: 500,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#FF512F'
    },
    body1: {
      lineHeight: '1.1',
      fontSize: "1",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32',
    },
    body2: {
      lineHeight: '1',
      fontSize: "1em",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    },
    caption: {
      fontSize: "1.3em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
    },
    button: {
      lineHeight: "1",
      fontSize: "1em",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: "#001C32",
      secondary: "#001C32"
    },
    primary: {
      main: '#929396'
    },
    secondary: {
      main: '#ff671e'
    },
    error: red,
    warning: orange,
    info: yellow,
    success: green,
  }
})

themeMobile = responsiveFontSizes(themeMobile)

const themeStylesMobile = makeStyles({
  landing: {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    background: 'linear-gradient(#001C32, #001C32)'
  },
  landingExit: {
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    background: 'linear-gradient(#001C32, #001C32)',
    visibility: "hidden",
    opacity: "0",
    transition: "visibility 0s 0.5s, opacity 0.5s linear"
  },
  landingDisplay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingLogoIcon: {
    height: "100px",
    width: '100px'
  },
  landingAppNameIcon: {
    height: "25px",
    width: '168px'
  },
  landingMinimaIcon: {
    height: "60px",
    width: '60px'
  },
  root: {
    background: 'linear-gradient(#F0F0FA, #F0F0FA)',
    height: "100vh",
    width: "100%",
    position: 'relative'
  },
  header: {
    paddingRight: themeMobile.spacing(4),
    paddingLeft: themeMobile.spacing(4),
    paddingTop: "32px",
    margin: "0",
    textAlign: 'center',
    background: 'linear-gradient(#001C32, #001C32)',
    height: "70px",
    width: "100%",
    position: 'absolute',
    top: '0'
  },
  subHeader: {
    paddingRight: themeMobile.spacing(4),
    paddingLeft: themeMobile.spacing(4),
    paddingBottom: themeMobile.spacing(1),
    paddingTop: themeMobile.spacing(1),
    margin: "0",
    background: 'linear-gradient(#F0F0FA, #F0F0FA)',
    height: "55px",
    width: "100%",
    position: 'absolute',
    top: '70px'
  },
  content: {
    paddingRight: themeMobile.spacing(4),
    paddingLeft: themeMobile.spacing(4),
    margin: "0",
    background: 'linear-gradient(#FAFAFF, #FAFAFF)',
    overflow: 'auto',
    width: "100%",
    position: 'absolute',
    bottom: '70px',
    top: '125px'
  },
  footer: {
    paddingRight: themeMobile.spacing(4),
    paddingLeft: themeMobile.spacing(4),
    paddingTop: "10px",
    margin: "0",
    background: 'linear-gradient(#001C32, #001C32)',
    height: "70px",
    width: "100%",
    position: 'absolute',
    bottom: '0'
  },
  storeTitle: {
    padding: "0",
    margin: "0"
  },
  storeDescription: {
    padding: "0",
    margin: "0"
  },
  caption: {
    padding: themeMobile.spacing(1),
    margin: "0"
  },
  details: {
    paddingTop: themeMobile.spacing(1),
    paddingBottom: themeMobile.spacing(1),
    margin: "0",
  },
  footerLinks: {
    fontWeight: 400,
    fontFamily: "\"Lato\", \"Arial\", \"sans-serif\", \"Roboto\"",
  },
  spinner: {
   position: 'relative',
   top: "50%",
   bottom: "50%"
  },
  deleteModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteModalSub: {
    backgroundColor: themeMobile.palette.background.default,
    boxShadow: themeMobile.shadows[3],
    padding: themeMobile.spacing(1),
    outline: "none",
    width: "40%"
  },
  deleteModalSubIcons: {
    textAlign: "center"
  },
  appIcon: {
    height: "35px",
    width: "35px"
  },
  downloadIcon: {
    height: "20px",
    width: '17px'
  },
  deleteIcon: {
    height: "15px",
    width: '15px'
  },
  tickIcon: {
    height: "15px",
    width: '19px'
  },
  helpIcon: {
    height: "32px",
    width: '32px'
  },
  contactIcon: {
    height: "32px",
    width: '32px'
  },
  aboutIcon: {
    height: "32px",
    width: '32px'
  },
  footerIcon: {
    height: "24px",
    width: '24px'
  },
  headerIcon: {
    height: "28px",
    width: '28px'
  },
  sortIcon: {
    height: "20px",
    width: '20px'
  },
  appNameIconContainer: {
    position: "relative",
    top: "0",
    left: "0",
    height: "28px",
    width: '104px'
  },
  appNameIcon: {
    position: "absolute",
    bottom: "0",
    left: "0",
    height: "16px",
    width: '104px'
  },
  storeIconParent: {
    marginTop: themeMobile.spacing(1),
    position: "relative",
    top: "0",
    left: "0",
  },
  storeIconContainer: {
    position: "relative",
    top: "0",
    left: "0",
    borderRadius: "50%",
    width: "30px",
    height: "30px"
  },
  storeIcon: {
    marginTop: themeMobile.spacing(1),
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  storesIconParent: {
    position: "relative",
    top: "0",
    left: "0",
  },
  storesIconContainer: {
    position: "relative",
    top: "0",
    left: "0",
    borderRadius: "50%",
    width: "35px",
    height: "35px"
  },
  storesIcon: {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
  },
  link: {
    textDecoration: 'none'
  },
  linkIcon: {
    margin: 'auto',
    height: "15px",
    width: '15px'
  },
  hr: {
    height: "1px",
    width: "100%"
  }
})

export { themeMobile, themeStylesMobile }
