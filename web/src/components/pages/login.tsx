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
  PageTypes,
  SignIn,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { login, initTx, initUser, getUser } from '../../store/app/server/actions'

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
  setActivePage: () => void
  initUser: () => void
  initTx: () => void
  login: (user: SignIn) => void
  getUser: () => void
}

type Props = StateProps & DispatchProps

const userLogin = (props: Props) => {

  const [user, setUser] = useState({email: "", password: ""})
  const [summary, setSummary] = useState("")
  let isFirstRun = useRef(true)
  const history = useHistory()

  const classes = themeStyles()

  useEffect(() => {

    props.setActivePage()
    let pushTimeout: any

    if ( isFirstRun.current ) {

      isFirstRun.current = false
      props.initUser()

    } else {

      const txSummary: string = props.tx.summary
      if( txSummary != summary ) {

        setSummary(txSummary)

        if ( txSummary === `${User.loginSuccess}` ) {

          props.getUser()
          pushTimeout = setTimeout(() => {
            props.initTx()
            history.push(`${Local.welcome}`)
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

      <Grid item container className={classes.form} xs={12}>

        <form onSubmit={formik.handleSubmit} className={classes.formSubmit}>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="email">{User.email}</label>
          </Grid>
          <Grid item container className={classes.formInput} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              id="outlined-basic"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.email && formik.touched.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </Grid>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="email">{User.password}</label>
          </Grid>
          <Grid item container className={classes.formInput} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              id="outlined-basic"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Grid>
          <Grid item container className={classes.formButton} xs={12}>
            <Button
              type='submit'
              className={classes.submitButton}
              color="primary"
              size='medium'
              variant="contained"
              data-for='loginButton'
              data-tip
              style={{
                textTransform: 'none',
                fontSize: "1em",
              }}
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
   setActivePage: () => dispatch(setActivePage(PageTypes.SIGNIN)),
   initUser: () => dispatch(initUser()),
   initTx: () => dispatch(initTx()),
   login: (user: SignIn) => dispatch(login(user)),
   getUser: () => dispatch(getUser()),
 }
}

export const Login = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userLogin)
