import React, { useEffect, useState } from 'react'
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
  UserRegister,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { register } from '../../store/app/server/actions'

import { Local, GeneralError, Help, User, Misc } from '../../config'

const registerSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  referral: Yup.string()
    .required(`${GeneralError.required}`),
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

  const { referral } = useParams<{ referral: string }>()

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
      if ( txSummary === `${User.registerSuccess}` ) {

        setSummary(`${User.registerEmail}`)
      }
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
        initialValues={ {userEmail: "", referral: referral} }
        enableReinitialize={true}
        validationSchema={registerSchema}
        onSubmit={(values: any) => {

          const userInfo: UserRegister = {
              email: values.userEmail,
              referral:  values.referral
          }
          props.register(userInfo)
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
                    {User.registerButton}
                  </Button>
                  <ReactTooltip
                    id='registerButton'
                    place="bottom"
                    effect="solid"
                  >
                    {Help.registerTip}
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
   register: (user: UserRegister) => dispatch(register(user))
 }
}

export const RegisterReferral = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userRegister)
