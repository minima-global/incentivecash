import React, { useEffect, useState } from 'react'
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
  UserRegister,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { register } from '../../store/app/server/actions'

import {
  Local,
  GeneralError,
  Help,
  User,
  Register,
  Misc
} from '../../config'

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  referral: Yup.string()
    .matches(/^[0-9a-zA-Z]+$/, `${GeneralError.format}`),
})

interface StateProps {
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: string) => void
  register: (user: UserRegister) => void
}

type Props = StateProps & DispatchProps

const userRegister = (props: Props) => {

  const [summary, setSummary] = useState("")

  let { referral } = useParams<{ referral: string }>()
  if (!referral) {
    referral = ""
  }

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

    const txSummary: string = props.tx.summary
    if( txSummary != summary ) {
      if ( txSummary === `${Register.registerSuccess}` ) {

        setSummary(`${Register.registerEmail}`)
      }
    }

  }, [props.tx])

  const formik = useFormik({
    initialValues: {
      email: "",
      referral: referral
    },
    enableReinitialize: true,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {

      const userInfo: UserRegister = {
          email: values.email,
          referral:  values.referral
      }
      props.register(userInfo)
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
        <br/><br/>
        <Grid item container justify="flex-start">
          <Button
            data-for='registerButton'
            data-tip
            style={{textTransform: 'none'}}
            size='medium'
            type='submit'
            variant="contained"
            color="primary"
          >
            {Register.registerButton}
          </Button>
          <ReactTooltip
            id='registerButton'
            place="bottom"
            effect="solid"
          >
            {Help.registerTip}
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
   register: (user: UserRegister) => dispatch(register(user))
 }
}

export const RegisterReferral = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userRegister)
