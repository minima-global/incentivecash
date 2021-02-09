import shortid from 'shortid'

// @ts-ignore
import { Email } from './smtp.js'
//

import {
  AppDispatch,
  UserActionTypes,
  User,
  UserRegister,
  UserRegisterPassword,
  SignIn,
  TableActionTypes,
  TxActionTypes,
  TxData
} from '../../types'

import {
  Local,
  Remote,
  Misc,
  User as UserConfig,
  Collection,
  Smtp
} from '../../../config'

import { write } from '../../actions'

export const init = () => {
  return async (dispatch: AppDispatch) => {

    dispatch(write({data: {}})(TxActionTypes.TX_INIT))
    dispatch(write({data: {}})(UserActionTypes.USER_INIT))
  }
}

export const register = (user: UserRegister) => {
  return async (dispatch: AppDispatch) => {

    const pass = shortid.generate()

    /*let registerURL = `${Remote.httpsServerURL}/#${Local.register}/${user.email}/${pass}`
    if ( user.referral ) {
      registerURL += `/${user.referral}`
    }

    //console.log("register url: ", registerURL)

    const body = `${Smtp.body}: ${registerURL} - ${Smtp.signature}`

    Email.send({
      SecureToken: `${Smtp.token}`,
      To: `${user.email}`,
      From : `${Smtp.from}`,
      Subject : `${Smtp.registerSubject}`,
      Body : `${body}`
    })
    .then( (message: any) => {

      console.log(message)

      if ( message === "OK" ) {*/

        const userCreate: SignIn = {
          email: `${user.email}`,
          password: `${pass}`
        }

        let d = new Date(Date.now())
        let dateText = d.toString()
        let txData: TxData = {
            code: "404",
            summary: `${UserConfig.createUserFailure}`,
            time: `${dateText}`
        }
        dispatch(write({data: txData})(TxActionTypes.TX_INIT))

        const url = `${Remote.serverURL}${Remote.createUser}`
        //console.log('URL: ', url)
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userCreate)
        })
        .then(response => {
          if (!response.ok) {
              const status = response.status
              const statusText = response.statusText
              return response.json()
              .then(data => {
                  txData = {
                      code: status.toString(),
                      summary: `${UserConfig.createUserFailure}: ${statusText}`,
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
                summary: `${UserConfig.registerSuccess}`,
                time: `${dateText}`
            }

            dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))
        })
        .catch(error => {
           //console.log(`${UserConfig.loginFailure}: ${error.message} at ${dateText}`)
           dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
        })
      /*}
    })*/
  }
}

export const registerPassword = (user: UserRegisterPassword) => {
  return async (dispatch: AppDispatch) => {


  }
}

export const login = (user: SignIn) => {
  return async (dispatch: AppDispatch) => {

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

export const getCollection = (url: string) => {
  return async (dispatch: AppDispatch, getState: Function) => {

     let state = getState()
     const jwt = state.userData.data.accessToken
     //console.log("this jwt: ", jwt)
     let d = new Date(Date.now())
      let dateText = d.toString()
      let txData = {
          code: "404",
          summary: `${Collection.getCollectionFailure}`,
          time: `${dateText}`
      }

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
                    summary: `${Collection.getCollectionFailure}: ${statusText}`,
                    time: `${dateText}`
                }
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {
        const collectionData = {
          info: data.data
        }
        dispatch(write({data: collectionData})(TableActionTypes.TABLE_SUCCESS))

      })
     .catch(error => {
          dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
     })
  }
}
