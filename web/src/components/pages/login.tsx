import React from 'react'
import { connect } from 'react-redux'

import { AppDispatch } from '../../store/types'
import { setActivePage } from '../../store/app/appData/actions'

import { Local, Login as LoginConfig } from '../../config'

interface DispatchProps {
  setActivePage: (page: string) => void
}

type Props = DispatchProps

export const login = (props: Props) => {

  props.setActivePage(Local.login)

  return (
    <p>
      blah login bvlah
    </p>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: string) => dispatch(setActivePage(page))
 }
}

export const Login = connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(login)
