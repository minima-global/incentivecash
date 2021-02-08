import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom"

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import ReactTooltip from 'react-tooltip'
import TextField from '@material-ui/core/TextField'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

import {
  ApplicationState,
  AppDispatch,
  UserRegisterPassword,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { registerPassword } from '../../store/app/server/actions'

import {
  Local,
  GeneralError,
  Help,
  User,
  Misc
} from '../../config'

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  referral: Yup.string()
    .required(`${GeneralError.required}`),
  password: Yup.string()
    .min(8, `${GeneralError.passTooShort}`)
    .required(`${GeneralError.required}`),
  password2: Yup.string()
    .oneOf([Yup.ref('userPassword'), null], `${GeneralError.passNotMatch}`)
    .min(8, `${GeneralError.passTooShort}`)
    .required(`${GeneralError.required}`)
})

interface StateProps {
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: string) => void
  registerPassword: (user: UserRegisterPassword) => void
}

type Props = StateProps & DispatchProps

const userRegister = (props: Props) => {

  const [summary, setSummary] = useState("")
  let isFirstRun = useRef(true)

  const { email } = useParams<{ email: string }>()
  const { referral } = useParams<{ referral: string }>()
  const { token } = useParams<{ token: string }>()

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  const history = useHistory()

  useEffect(() => {

    props.setActivePage(Local.register)
    let pushTimeout: any

    if ( isFirstRun.current ) {

      isFirstRun.current = false

    } else {

      const txSummary: string = props.tx.summary
      if( txSummary != summary ) {

        setSummary(txSummary)

        if ( txSummary === `${User.loginSuccess}` ) {

          pushTimeout = setTimeout(() => {
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
      email: email,
      referral: referral,
      password: "",
      password2: ""
    },
    enableReinitialize: true,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {

      const userInfo: UserRegisterPassword = {
          email: values.email,
          referral: values.referral,
          token:  token,
          password:  values.password
      }
      props.registerPassword(userInfo)
    },
  })

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {User.registerHeading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
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
          id="referral"
          name="referral"
          label={User.referral}
          value={formik.values.referral}
          onChange={formik.handleChange}
          error={formik.touched.referral && Boolean(formik.errors.referral)}
          helperText={formik.touched.referral && formik.errors.referral}
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
        <TextField
          fullWidth
          id="password2"
          name="password2"
          label={User.password2}
          type="password"
          value={formik.values.password2}
          onChange={formik.handleChange}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
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
   registerPassword: (user: UserRegisterPassword) => dispatch(registerPassword(user))
 }
}

export const RegisterPassword = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userRegister)
