import React, { useState } from 'react'
import { connect } from 'react-redux'

import { isMobile } from "react-device-detect"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import * as Yup from 'yup'
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import { FormControl } from '@material-ui/core'
import { TextField } from "material-ui-formik-components"
import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
import Button from '@material-ui/core/Button'
import ReactTooltip from 'react-tooltip'

import hrFirst from '../../images/hrFirst.svg'
import hrFirstMobile from '../../images/hrFirstMobile.svg'

import { themeStyles, themeStylesMobile } from '../../styles'

import { AppDispatch } from '../../store/types'
import { setActivePage } from '../../store/app/appData/actions'

import { Local, GeneralError, Help, Login as LoginConfig } from '../../config'

const loginSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  userPassword: Yup.string()
    .required(`${GeneralError.required}`),
})

interface DispatchProps {
  setActivePage: (page: string) => void
}

type Props = DispatchProps

export const home = (props: Props) => {

  const [user, setUser] = useState({email: "", password: ""})
  const [isSubmitting, setSubmit] = useState(false)

  let classes = themeStyles()
  let hr = hrFirst
  if ( isMobile ) {

    classes = themeStylesMobile()
    hr = hrFirstMobile
  }

  props.setActivePage(Local.home)

  return (

    <Grid container alignItems="flex-start">
      <Grid item container justify="flex-start" xs={12}>
        <Typography variant="h2">
          {LoginConfig.heading}
        </Typography>
      </Grid>
      <Grid item container xs={12} alignItems="flex-start">
        <img src={hr} className={classes.hr}/>
      </Grid>

      <Formik
        initialValues={ {userEmail: user.email, userPassword: user.password} }
        enableReinitialize={true}
        validationSchema={loginSchema}
        onSubmit={(values: any) => {

          setSubmit(true)

          /*const userInfo: User = {
              email: values.userEmail,
              password:  values.password
          }
          props.handleSubmit(userInfo)*/
        }}
      >
        {(formProps: FormikProps<any>) => (
          <Form>
            <FormControl fullWidth={true}>
                <Field
                  name='userEmail'
                  label={LoginConfig.email}
                  component={TextField}
                />
                <Field
                  name='userPassword'
                  label={LoginConfig.password}
                  component={TextField}
                />
                <Grid container>
                    <Grid item xs={12} sm={3}>
                      <Button
                        data-for='loginButton'
                        data-tip
                        size='large'
                        type='submit'
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        {LoginConfig.loginButton}
                      </Button>
                      <ReactTooltip
                        id='loginButton'
                        place="bottom"
                        effect="solid"
                      >
                        {Help.loginTip}
                      </ReactTooltip>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        &nbsp;
                    </Grid>
                </Grid>
            </FormControl>
          </Form>
      )}
      </Formik>
    </Grid>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page))
 }
}

export const Home = connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(home)
