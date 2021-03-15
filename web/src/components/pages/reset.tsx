import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"

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
  Reset as UserReset,
  TxData
} from '../../store/types'

import { setActivePage } from '../../store/app/appData/actions'
import { initTx, initUser, reset } from '../../store/app/server/actions'

import { Local, Paths, GeneralError, Help, User, Misc } from '../../config'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`${GeneralError.required}`)
})

interface StateProps {
  tx: TxData
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
  initUser: () => void
  initTx: () => void
  reset: (user: UserReset) => void
}

type Props = StateProps & DispatchProps

const display = (props: Props) => {

  const [user, setUser] = useState({email: ""})
  const [summary, setSummary] = useState("")
  const history = useHistory()
  let isFirstRun = useRef(true)

  const classes = themeStyles()

  useEffect(() => {

    let pushTimeout: any

    if ( isFirstRun.current ) {

      isFirstRun.current = false
      props.initUser()

    } else {

      const txSummary: string = props.tx.summary
      if( txSummary != summary ) {

        setSummary(txSummary)

        if ( txSummary === `${User.resetSuccess}` ) {

          pushTimeout = setTimeout(() => {
            props.initTx()
            props.setActivePage(PageTypes.RESETPASSWORD)
            history.push(`${Local.resetPassword}`)
          }, Misc.referralDelay)
        }
      }

    }

    return () => {
      clearTimeout(pushTimeout)
    }

  }, [props.tx])

  const formik = useFormik({
    initialValues: {
      email: user.email
    },
    enableReinitialize: true,
    validationSchema: loginSchema,
    onSubmit: (values: any) => {

      const userInfo: UserReset = {
          email: values.email
      }
      props.reset(userInfo)
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
              {User.resetButton}
            </Button>
          </Grid>

          <Grid item container className={classes.formSummary} xs={12}>
            <Typography variant="h5">
              {summary}
            </Typography>
          </Grid>

        </form>
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
   initUser: () => dispatch(initUser()),
   initTx: () => dispatch(initTx()),
   reset: (user: UserReset) => dispatch(reset(user)),
 }
}

export const Reset = connect<StateProps, DispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(display)
