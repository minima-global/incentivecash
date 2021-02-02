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

import { AppDispatch, SignIn } from '../../store/types'
import { setActivePage } from '../../store/app/appData/actions'
import { login } from '../../store/app/server/actions'

import { Local, GeneralError, Help, User } from '../../config'

const loginSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email()
    .required(`${GeneralError.required}`),
  userPassword: Yup.string()
    .required(`${GeneralError.required}`),
})

interface DispatchProps {
  setActivePage: (page: string) => void
  login: (user: SignIn) => void
}

type Props = DispatchProps

export const home = (props: Props) => {

  const [user, setUser] = useState({email: "", password: ""})

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
          {User.heading}
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

          const userInfo: SignIn = {
              email: values.userEmail,
              password:  values.userPassword
          }
          props.login(userInfo)
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
                  name='userPassword'
                  label={User.password}
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
    </Grid>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page)),
   login: (user: SignIn) => dispatch(login(user))
 }
}

export const Home = connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(home)
