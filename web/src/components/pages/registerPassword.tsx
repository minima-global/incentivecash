import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom"

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import * as Yup from 'yup'
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import { FormControl } from '@material-ui/core'
import { TextField } from "material-ui-formik-components"
import Button from '@material-ui/core/Button'
import ReactTooltip from 'react-tooltip'

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
  userEmail: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  referral: Yup.string()
    .required(`${GeneralError.required}`),
  userPassword: Yup.string()
    .required(`${GeneralError.required}`),
  userPassword2: Yup.string()
    .required(`${GeneralError.required}`),
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

      <Formik
        initialValues={ {userEmail: email, referral: referral, userPassword: "", userPassword2: ""} }
        enableReinitialize={true}
        validationSchema={registerSchema}
        onSubmit={(values: any) => {

          const userInfo: UserRegisterPassword = {
              email: values.userEmail,
              referral: values.referral,
              token:  token,
              password:  values.userPassword
          }
          props.registerPassword(userInfo)
        }}
      >
        {(formProps: FormikProps<any>) => (
          <Form>
            <FormControl fullWidth={true}>
                <Field
                  name='userEmail'
                  label={User.email}
                  component={TextField}
                />
                <Field
                  name='referral'
                  label={User.referral}
                  component={TextField}
                />
                <Field
                  name='userPassword'
                  label={User.password}
                  component={TextField}
                />
                <Field
                  name='userPassword2'
                  label={User.password2}
                  component={TextField}
                />
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
            </FormControl>
          </Form>
      )}
      </Formik>
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
