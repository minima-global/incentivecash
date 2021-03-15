import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { themeStyles } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  PageTypes,
  User as UserData,
  UserResetPassword,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { resetPassword, initTx } from '../../store/app/server/actions'

import {
  Local,
  Paths,
  GeneralError,
  Post,
  Help,
  User,
  Register,
  Misc
} from '../../config'

const registerSchema = Yup.object().shape({
  token: Yup.string()
    .required(`${Register.tokenRequired}`),
  password: Yup.string()
    .min(8, `${Register.passTooShort}`)
    .required(`${GeneralError.required}`),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], `${Register.passNotMatch}`)
    .required(`${GeneralError.required}`)
})

interface StateProps {
  user: UserData
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
  initTx: () => void
  resetPassword: (user: UserResetPassword) => void
}

type Props = StateProps & DispatchProps

const display = (props: Props) => {

  const [summary, setSummary] = useState("")
  let isFirstRun = useRef(true)

  let { uid } = useParams<{ uid: string }>()
  let { referral } = useParams<{ referral: string }>()
  const { email } = useParams<{ email: string }>()
  const history = useHistory()

  const classes = themeStyles()

  useEffect(() => {

    //props.setActivePage(PageTypes.REGISTERPASSWORD)
    let pushTimeout: any

    if ( isFirstRun.current ) {

      isFirstRun.current = false

    } else {

      const txSummary: string = props.tx.summary
      if( txSummary != summary ) {

        setSummary(txSummary)

        if (( txSummary === `${User.resetPasswordSuccess}` ) ||
            ( txSummary === `${Post.postSuccess}`)) {

          setSummary(`${Register.login}`)

          pushTimeout = setTimeout(() => {
            props.setActivePage(PageTypes.SIGNIN)
            props.initTx()
            history.push(`${Local.home}`)
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
      token: "",
      password: "",
      password2: ""
    },
    enableReinitialize: true,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {

      const userInfo: UserResetPassword = {
          token:  values.token,
          password:  values.password
      }
      props.resetPassword(userInfo)
    },
  })

  return (

    <>

      <Grid item container xs={12}>

        <Grid item container justify="center" xs={12}>

          <Typography variant="h3">
            {Paths.reset}
          </Typography>

          <Grid item container justify="flex-start" xs={12}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="2000"
               height="4"
            >
              <line x2="2000" stroke="#317AFF" strokeWidth={4} />
            </svg>
          </Grid>

        </Grid>

        <form onSubmit={formik.handleSubmit} className={classes.formSubmit}>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="token">{Register.token}</label>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              size="small"
              name="token"
              type="text"
              value={formik.values.token}
              onChange={formik.handleChange}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.token && formik.touched.token ? (
              <div>{formik.errors.token}</div>
            ) : null}
          </Grid>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="password">{User.password}</label>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              size="small"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Grid>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="password2">{User.password2}</label>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              size="small"
              name="password2"
              type="password"
              value={formik.values.password2}
              onChange={formik.handleChange}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.password2 && formik.touched.password2 ? (
              <div>{formik.errors.password2}</div>
            ) : null}
          </Grid>
          <Grid item container className={classes.formButton} xs={12}>
            <Button
              type='submit'
              className={classes.submitButton}
              color="primary"
              size='medium'
              variant="contained"
              style={{
                textTransform: 'none',
                fontSize: "1em",
              }}
            >
              {User.resetButton}
            </Button>
          </Grid>
        </form>

        <Grid item container className={classes.formSummary} xs={12}>
          <Typography variant="h5">
            {summary}
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    user: state.userData.data as UserData,
    tx: state.tx.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page)),
   initTx: () => dispatch(initTx()),
   resetPassword: (user: UserResetPassword) => dispatch(resetPassword(user))
 }
}

export const ResetPassword = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)