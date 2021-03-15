import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory, useParams } from "react-router-dom"

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
  UserRegister,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { register, initTx } from '../../store/app/server/actions'

import {
  Local,
  Paths,
  GeneralError,
  Help,
  User,
  Register,
  Misc
} from '../../config'

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`${GeneralError.required}`)
})

interface StateProps {
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
  initTx: () => void
  register: (user: UserRegister) => void
}

type Props = StateProps & DispatchProps

const userRegister = (props: Props) => {

  const [summary, setSummary] = useState("")
  const [email, setEmail] = useState("")
  const { uid } = useParams<{ uid: string }>()
  const { referral } = useParams<{ referral: string }>()
  const history = useHistory()

  const classes = themeStyles()

  useEffect(() => {

    let pushTimeout: any

    //console.log("stored summary: ", summary, "txSummary: ", props.tx.summary)

    const txSummary: string = props.tx.summary
    if( txSummary != summary ) {
      if ( txSummary === `${Register.registerSuccess}` ) {

        setSummary(`${Register.registerEmail}`)

        let url = `${Local.register}/${email}`
        if (uid && referral) {
          url = `${Local.register}/${uid}/${referral}/${email}`
        }
        pushTimeout = setTimeout(() => {
          props.setActivePage(PageTypes.REGISTERPASSWORD)
          props.initTx()
          history.push(`${url}`)
        }, Misc.referralDelay)
      }
    }

    return () => {
      clearTimeout(pushTimeout)
    }

  }, [props.tx])

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    enableReinitialize: true,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {

      setEmail(values.email)
      const userInfo: UserRegister = {
        email: values.email,
        uid: uid,
        referral: referral
      }
      props.register(userInfo)
    },
  })

  return (

    <>
      <Grid item container xs={12}>

        <Grid item container justify="center" xs={6}>

          <Link
            className={classes.registerActiveLink}
            to={Local.register}
            onClick={() => props.setActivePage(PageTypes.REGISTER)}
          >
            {Paths.register}
          </Link>

          <Grid item container xs={12}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="2000"
               height="4"
               style={{
                 paddingRight: "10px"
               }}
            >
              <line x2="2000" stroke="#317AFF" strokeWidth={4} />
            </svg>
          </Grid>

        </Grid>

        <Grid item container justify="center" xs={6}>

          <Link
            className={classes.registerInActiveLink}
            to={Local.signIn}
            onClick={() => props.setActivePage(PageTypes.SIGNIN)}
          >
            {Paths.signIn}
          </Link>

          <Grid item container xs={12}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="2000"
               height="4"
               style={{
                 paddingLeft: "10px"
               }}
            >
              <line x2="2000" stroke="#AAAABE" strokeWidth={4} />
            </svg>
          </Grid>

        </Grid>

        <form onSubmit={formik.handleSubmit} className={classes.formSubmit}>
          <Grid item container className={classes.formLabel} xs={12}>
            <label htmlFor="email">{User.email}</label>
          </Grid>
          <Grid item container xs={12}>
            <TextField
              fullWidth
              size="small"
              name="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item container className={classes.formError} xs={12}>
            {formik.errors.email && formik.touched.email ? (
              <div>{formik.errors.email}</div>
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
                fontSize: "1em"
              }}
            >
              {Register.registerButton}
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
    tx: state.tx.data as TxData
  }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page)),
   initTx: () => dispatch(initTx()),
   register: (user: UserRegister) => dispatch(register(user))
 }
}

export const RegisterReferral = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(userRegister)
