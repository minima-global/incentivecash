import React from 'react'

import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/blue'
import indigo from '@material-ui/core/colors/indigo'
import orange from '@material-ui/core/colors/orange'
import yellow from '@material-ui/core/colors/yellow'

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/

const breakpoints = createBreakpoints({})
let theme = createMuiTheme ({
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
    fontWeightBold: 700,
    h1: {
      [breakpoints.up('xs')]: {
        lineHeight: "1.5",
        fontSize:  "2.2em",
        fontWeight: 700,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32',
      }
    },
    h2: {
      [breakpoints.up('xs')]: {
        lineHeight: "1.5",
        fontSize: "2em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#91919D'
      }
    },
    h3: {
      [breakpoints.up('xs')]: {
        lineHeight: '1.5',
        fontSize: "1.25em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#91919D'
      }
    },
    h4: {
      [breakpoints.up('xs')]: {
        lineHeight: '1.5',
        fontSize: "1em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#91919D'
      }
    },
    h5: {
      [breakpoints.up('xs')]: {
        lineHeight: "1.2",
        fontSize: "0.9em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#001C32'
      }
    },
    h6: {
      [breakpoints.up('xs')]: {
        lineHeight: "1.2",
        fontSize: "0.9em",
        fontWeight: 400,
        fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
        color: '#317AFF'
      }
    },
    subtitle1: {
      lineHeight: "2.5",
      fontSize: "1em",
      fontWeight: 600,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#FFFFFF'
    },
    subtitle2: {
      fontSize: "0.8em",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#F0F0FA'
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
      fontSize: "1",
      fontWeight: 400,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32',
    },
    caption: {
      fontSize: "1.1em",
      fontWeight: 700,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#F0F0FA',
    },
    button: {
      fontSize: "1.8em",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
      color: '#001C32'
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#edefef',
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

theme = responsiveFontSizes(theme)

const themeStyles = makeStyles({
  root: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#000000, #000000)',
      height: "100vh",
      width: "100%",
      position: 'relative'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#000000, #000000)',
      marginTop: "5vh",
      marginBottom: "5vh",
      marginLeft: "auto",
      marginRight: "auto",
      height: "90vh",
      width: "40%",
      position: 'relative'
    }
  },
  header: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#001C32, #001C32)',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      margin: "0",
      height: "50px",
      width: "100%",
      position: 'absolute',
      top: '0'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#001C32, #001C32)',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      margin: "0",
      height: "50px",
      width: "100%",
      position: 'absolute',
      top: '0'
    }
  },
  subHeader: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      margin: "0",
      height: "60px",
      width: "100%",
      position: 'absolute',
      top: '50px'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      margin: "0",
      textAlign: 'center',
      height: "60px",
      width: "100%",
      position: 'absolute',
      top: '50px'
    }
  },
  loggedOutContent: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      margin: "0",
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '121px',
      top: '50px'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#F0F0FA, #F0F0FA)',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      margin: "0",
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '121px',
      top: '50px'
    }
  },
  content: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#FAFAFF, #FAFAFF)',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      margin: "0",
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '121px',
      top: '110px'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#FAFAFF, #FAFAFF)',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      margin: "0",
      overflow: 'auto',
      width: "100%",
      position: 'absolute',
      bottom: '121px',
      top: '110px'
    }
  },
  footer: {
    [breakpoints.up('xs')]: {
      background: 'linear-gradient(#001C32, #001C32)',
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(1),
      margin: "0",
      height: "121px",
      width: "100%",
      position: 'absolute',
      bottom: '0'
    },
    [breakpoints.up('md')]: {
      background: 'linear-gradient(#001C32, #001C32)',
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      paddingTop: theme.spacing(1),
      margin: "0",
      height: "121px",
      width: "100%",
      position: 'absolute',
      bottom: '0'
    }
  },
  details: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: "0",
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
    [breakpoints.up('xs')]: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[3],
      padding: theme.spacing(1),
      outline: "none",
      width: "10%"
    }
  },
  deleteModalSubIcons: {
    textAlign: "center"
  },
  appIcon: {
    [breakpoints.up('xs')]: {
      height: "50px",
      width: '50px'
    }
  },
  downloadIcon: {
    [breakpoints.up('xs')]: {
      height: "25px",
      width: '20px'
    }
  },
  deleteIcon: {
    [breakpoints.up('xs')]: {
      height: "25px",
      width: '25px'
    }
  },
  tickIcon: {
    [breakpoints.up('xs')]: {
      height: "25px",
      width: '31px'
    }
  },
  subHeaderIconParent: {
    [breakpoints.up('xs')]: {
      position: "relative",
      height: "100%"
    }
  },
  helpIcon: {
    [breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      height: "40px",
      width: '40px'
    }
  },
  contactIcon: {
    [breakpoints.up('xs')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      height: "40px",
      width: '40px'
    }
  },
  aboutIcon: {
    [breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: "40px",
      width: '40px'
    }
  },
  footerIcon: {
    [breakpoints.up('xs')]: {
      height: "35px",
      width: '35px'
    }
  },
  headerIcon: {
    [breakpoints.up('xs')]: {
      height: "50px",
      width: '50px'
    }
  },
  sortIcon: {
    [breakpoints.up('xs')]: {
      height: "25px",
      width: '25px'
    }
  },
  appNameIconContainer: {
    [breakpoints.up('xs')]: {
      position: "relative",
      top: "0",
      left: "0",
      height: "50px",
      width: '208px'
    }
  },
  appNameIcon: {
    [breakpoints.up('xs')]: {
      position: "absolute",
      bottom: "0",
      left: "0",
      height: "25px",
      width: '168px'
    }
  },
  linkIcon: {
    [breakpoints.up('xs')]: {
      margin: 'auto',
      height: "15px",
      width: '15px'
    },
    [breakpoints.up('md')]: {
      margin: 'auto',
      height: "30px",
      width: '30px'
    }
  },
  form: {
    paddingTop: theme.spacing(2),
  },
  formSubmit: {
    width: '100%',
    /*'& .MuiTextField-root': {
      border: '1px solid',
      borderColour: '#000000',
      borderRadius: '6px',
      width: '100ch',
    },*/
  },
  formInput: {
    border: '2px solid',
    borderColour: '#C8C8D4',
    borderRadius: '5px',
    background: 'linear-gradient(#FFFFFF, #FFFFFF)'
  },
  formLabel: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  formError: {
    paddingTop: theme.spacing(1),
    color: 'red'
  },
  formButton: {
    paddingTop: theme.spacing(2)
  },
  submitButton: {
    width: '100%',
    background: 'linear-gradient(#317AFF, #317AFF)'
  },
  activeLink: {
    lineHeight: "2",
    fontSize: "1.6em",
    fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
    color: '#001C32',
    textDecoration: 'none',
    '&:active': {
      textDecoration: 'none',
      fontWeight: 900
    },
    '&:hover': {
      textDecoration: 'none',
      color: '#a1c8ff'
    }
  },
  inactiveLink: {
    lineHeight: "2",
    fontSize: "1.6em",
    fontFamily: "\"Manrope\", \"Roboto\", \"Arial\", \"sans-serif\"",
    color: '#c7cdd7',
    textDecoration: 'none',
    '&:active': {
      textDecoration: 'none',
      fontWeight: 900
    },
    '&:hover': {
      textDecoration: 'none',
      color: '#a1c8ff'
    }
  },
  iconLink: {
    textDecoration: 'none',
  },
  hr: {
    height: "1px",
    width: "100%"
  },
  hrBlue: {
    backgroundColor: "#317aff",
    width: "100%"
  },
  hrGrey: {
    backgroundColor: "#C8C8D4",
    width: "100%"
  }
})

export { theme, themeStyles }
