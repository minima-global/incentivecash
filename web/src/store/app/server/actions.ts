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
    console.log('URL: ', url)
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

        console.log("login data: ", userData)

        dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))
        dispatch(write({data: userData})( UserActionTypes.USER_INIT))
        /*setTimeout(() => {
            history.push(`${Local.user}`)
        }, Misc.successLoginDelay)*/
    })
    .catch(error => {
       console.log(`${UserConfig.loginFailure}: ${error.message} at ${dateText}`)
       dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
    })
  }
}

/*export const getInfo = (details: UserProps) => {
  return async (dispatch: AppDispatch) => {

     let d = new Date(Date.now())
      let dateText = d.toString()
      let txData = {
          code: 404,
          summary: `${User.errorUser}: Failed to fetch at ${dateText}`,
          info: {}
      }

      const url = `${Remote.secure}${Remote.server}${Remote.user}`
      fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${details.jwt}`
        }
      })
      .then(response => {
        if (!response.ok) {
            const status = response.status
            const statusText = response.statusText
            return response.json()
            .then(data => {
                const txData = {
                    code: status,
                    summary: `${User.errorUser}: ${statusText} at ${dateText}`,
                    info: data
                }
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
          const userData = {
              email: details.email,
              jwt: details.jwt,
              info: data.data
          }
          dispatch(write({data: userData})(AccountActionTypes.ACCOUNT_SUCCESS))

      })
     .catch(error => {
          console.log(`${User.errorUser}: ${error.message} at ${dateText}`)
          dispatch(write({data: txData})(FormActionTypes.FORM_FAILURE))
     })
  }
}*/
