//import { useHistory } from "react-router-dom"

import {
  AppDispatch,
  UserActionTypes,
  User,
  SignIn,
  TxActionTypes,
  TxData
} from '../../types'

import { Local, Remote, Misc, User as UserConfig } from '../../../config'

import { write } from '../../actions'

export const login = (user: SignIn) => {
  return async (dispatch: AppDispatch) => {

    //let history = useHistory()

    let d = new Date(Date.now())
    let dateText = d.toString()
    let txData: TxData = {
        code: "404",
        summary: `${UserConfig.loginFailure}`,
        time: `${dateText}`
    }
    dispatch(write({data: txData})(TxActionTypes.TX_INIT))

    const url = `${Remote.serverURL}${Remote.userLogin}`
    //console.log('URL: ', url)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (!response.ok) {
          const status = response.status
          const statusText = response.statusText
          return response.json()
          .then(data => {
              txData = {
                  code: status.toString(),
                  summary: `${UserConfig.loginFailure}: ${statusText}`,
                  time: `${dateText}`
              }
              throw new Error(statusText)
          })
      }
      return response.json()
    })
    .then(data => {
        txData = {
            code: "200",
            summary: `${UserConfig.loginSuccess}`,
            time: `${dateText}`
        }
        const userData = {
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          info: {}
        }

        //console.log("login data: ", userData)

        dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))
        dispatch(write({data: userData})(UserActionTypes.USER_INIT))
        /*setTimeout(() => {
            history.push(`${Local.user}`)
        }, Misc.successLoginDelay)*/
    })
    .catch(error => {
       //console.log(`${UserConfig.loginFailure}: ${error.message} at ${dateText}`)
       dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
    })
  }
}

export const getUser = () => {
  return async (dispatch: AppDispatch, getState: Function) => {

     let state = getState()
     const jwt = state.userData.data.accessToken
     console.log("jwt: ", jwt)
     let d = new Date(Date.now())
      let dateText = d.toString()
      let txData = {
          code: "404",
          summary: `${UserConfig.getUserFailure}`,
          time: `${dateText}`
      }

      const url = `${Remote.serverURL}${Remote.userPath}`
      fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${jwt}`
        }
      })
      .then(response => {
        if (!response.ok) {
            const status = response.status
            const statusText = response.statusText
            return response.json()
            .then(data => {
                const txData = {
                    code: status.toString(),
                    summary: `${UserConfig.getUserFailure}: ${statusText}`,
                    time: `${dateText}`
                }
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
        const userData = {
          accessToken: state.userData.data.accessToken,
          refreshToken: state.userData.data.refreshToken,
          info: data.data
        }
        dispatch(write({data: userData})(UserActionTypes.USER_SUCCESS))

      })
     .catch(error => {
          //console.log(`${UserConfig.getUserFailure}: ${error.message} at ${dateText}`)
          dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
     })
  }
}
