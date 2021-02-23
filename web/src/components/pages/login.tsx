import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ReactTooltip from 'react-tooltip'

import hrFirst from '../../images/hrFirst.svg'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  SignIn,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { login, initTx } from '../../store/app/server/actions'

import { Local, Paths, GeneralError, Help, User, Misc } from '../../config'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  password: Yup.string()
    .required(`${GeneralError.required}`),
})

interface StateProps {
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: string) => void
  initTx: () => void
  login: (user: SignIn) => void
}

type Props = StateProps & DispatchProps

const userLogin = (props: Props) => {

  const [user, setUser] = useState({email: "", password: ""})
  const [summary, setSummary] = useState("")
  let isFirstRun = useRef(true)
  const history = useHistory()

  const classes = themeStyles()

  useEffect(() => {

    props.setActivePage(Local.home)
    let pushTimeout: any

    if ( isFirstRun.current ) {

      isFirstRun.current = false

    } else {

      const txSummary: string = props.tx.summary
      if( txSummary != summary ) {

        setSummary(txSummary)

        if ( txSummary === `${User.loginSuccess}` ) {

          pushTimeout = setTimeout(() => {
            props.initTx()
            history.push(`${Local.user}`)
          }, Misc.successLoginDelay)
        }
      }

    }

    return () => {
      clearTimeout(pushTimeout)
    }

  }, [props.tx])

  const formik = useFormik({
    initialValues: {
      email: user.email,
      password: user.password
    },
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: (values: any) => {

      const userInfo: SignIn = {
          email: values.email,
          password:  values.password
      }
      props.login(userInfo)
    },
  })

  return (

    <Grid container alignItems="flex-start">

      <Grid item container justify="flex-start" xs={12}>

        <Grid item container justify="center" xs={6}>

         <NavLink to={Local.signIn} className={classes.activeLink}>
          {Paths.signIn}
         </NavLink>

         <img src={hrFirst} className={classes.hr}/>

        </Grid>

        <Grid item container justify="center" xs={6}>

         <NavLink to={Local.register} className={classes.inactiveLink}>
          {Paths.register}
         </NavLink>

         <img src={hrFirst} className={classes.hr}/>

        </Grid>

      </Grid>

      <Grid item container xs={12}>
        <form onSubmit={formik.handleSubmit} className={classes.formInput}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              variant="outlined"
              id="email"
              name="email"
              label={User.email}
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              variant="outlined"
              id="password"
              name="password"
              label={User.password}
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item container justify="flex-start">
            <Button
              data-for='loginButton'
              data-tip
              style={{textTransform: 'none'}}
              size='medium'
              type='submit'
              variant="contained"
              color="primary"
            >
              {User.loginButton}
            </Button>
            <ReactTooltip
              id='loginButton'
              place="bottom"
              effect="solid"
            >
              {Help.loginTip}
            </ReactTooltip>
          </Grid>
        </form>
      </Grid>

      <Grid item container xs={12} alignItems="flex-start">
        <Typography variant="h5">
          {summary}
        </Typography>
      </Grid>

    </Grid>
  )
}

//error={formik.touched.password && Boolean(formik.errors.password)}
// helperText={formik.touched.password && formik.errors.password}
//error={formik.touched.email && Boolean(formik.errors.email)}
//helperText={formik.touched.email && formik.errors.email}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    tx: state.tx.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page)),
   initTx: () => dispatch(initTx()),
   login: (user: SignIn) => dispatch(login(user))
 }
}

export const Login = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userLogin)
