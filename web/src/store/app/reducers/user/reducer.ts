import { ActionProps, UserActionTypes, UserProps } from '../../../types'

const initialState: UserProps = {
  data: {
    accessToken: "",
    refreshToken: "",
    info: {}
  }
}

export const reducer = (state: UserProps = initialState, action: ActionProps): UserProps => {

  switch (action.type) {
    case UserActionTypes.USER_INIT: {
      const data = (action.payload as UserProps)
      return data
    }
    case UserActionTypes.USER_SUCCESS:
    case UserActionTypes.USER_FAILURE: {
      const data = (action.payload as UserProps)
      return {...state, ...data}
    }
    default:
      return state
  }
}
