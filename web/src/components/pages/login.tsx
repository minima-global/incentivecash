import React, { useEffect, useState, useRef } from 'react'
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

import { Local, GeneralError, Help, User, Misc } from '../../config'

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

/*
<Grid item container justify="flex-start" xs={6}>

 <NavLink to={Local.signIn}>
  <a href={Local.signIn}>
   <Typography variant="h4">
     {Paths.signIn}
   </Typography>
  </a>
 </NavLink>

</Grid>

<Grid item container justify="flex-end" xs={6}>

 <NavLink to={Local.register}>
 <NavLink to={Local.register}>
  <a href={Local.register}>
   <Typography variant="h4">
     {Paths.register}
   </Typography>
  </a>
 </NavLink>

</Grid>
*/

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
        <Typography variant="h2">
          {User.loginHeading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hrFirst} className={classes.hr}/>
      </Grid>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label={User.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label={User.password}
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br/><br/>
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

      <Grid item container xs={12} alignItems="flex-start">
        <Typography variant="h5">
          {summary}
        </Typography>
      </Grid>

    </Grid>
  )
}

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
