import shortid from 'shortid'

// @ts-ignore
import { Email } from './smtp.js'

import {
  AppDispatch,
  UserActionTypes,
  User,
  Reset,
  UserRegister,
  UserRegisterPassword,
  CreateUser,
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
  Register as RegisterConfig,
  Dbase,
  Smtp,
  Post
} from '../../../config'

import { write } from '../../actions'

let web = Remote.prodHttpsServerURL
let dbase = Remote.prodDbaseServerURL
if ( process.env.NODE_ENV === 'development' ) {
  web = Remote.devHttpsServerURL
  dbase = Remote.devDbaseServerURL
}

export const init = () => {
  return async (dispatch: AppDispatch) => {

    dispatch(write({data: {}})(TxActionTypes.TX_INIT))
    dispatch(write({data: {}})(UserActionTypes.USER_INIT))
  }
}

export const initTx = () => {
  return async (dispatch: AppDispatch) => {

    dispatch(write({data: {}})(TxActionTypes.TX_INIT))
  }
}

export const initUser = () => {
  return async (dispatch: AppDispatch) => {

    dispatch(write({data: {}})(UserActionTypes.USER_INIT))
  }
}

export const register = (user: UserRegister) => {
  return async (dispatch: AppDispatch) => {

    const pass = shortid.generate()
    let body = RegisterConfig.welcome
    body += `<p>${RegisterConfig.preBody}</p>`
    body += `<p>${pass}</p>`
    body += `<p>${RegisterConfig.postBody}</p>`
    body += `<p>${RegisterConfig.thanks}</p>`
    body += `<p>${RegisterConfig.signature}</p>`

    Email.send({
      SecureToken: `${Smtp.token}`,
      To: `${user.email}`,
      From : `${RegisterConfig.from}`,
      Subject : `${RegisterConfig.registerSubject}`,
      Body : `${body}`
    })
    .then( (message: any) => {

      //console.log(message)

      if ( message === "OK" ) {

        let d = new Date(Date.now())
        let dateText = d.toString()
        const txData = {
            code: "200",
            summary: `${RegisterConfig.registerSuccess}`,
            time: `${dateText}`
        }

        const userData = {
          accessToken: "",
          refreshToken: "",
          info: {
            avatar: "",
            description: "",
            email: "",
            first_name: "",
            id: "",
            language: "",
            last_access: "",
            last_name: "",
            last_page: "",
            location: "",
            password: "",
            role: "",
            status: "",
            tags: "",
            tfa_secret: "",
            theme: "",
            title: "",
            token: `${pass}`
          }
        }

        dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))
        dispatch(write({data: userData})(UserActionTypes.USER_INIT))
      }
    })
  }
}

export const registerPassword = (user: UserRegisterPassword) => {
  return async (dispatch: AppDispatch, getState: Function) => {

    const state = getState()
    const storedToken = state.userData.data.info.token
    let d = new Date(Date.now())
    let dateText = d.toString()
    let txData: TxData = {
        code: "404",
        summary: `${RegisterConfig.passwordFailure}`,
        time: `${dateText}`
    }

    if ( storedToken === user.token ) {

      const userCreate: CreateUser = {
        email: `${user.email}`,
        password: `${user.password}`,
        role: `${Dbase.userRole}`
      }

      dispatch(write({data: {}})(TxActionTypes.TX_INIT))

      const url = `${dbase}${Remote.createUser}`
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
                    summary: `${RegisterConfig.passwordFailure}: ${statusText}`,
                    time: `${dateText}`
                }
                throw new Error(statusText)
            })
        }
        return response.json()
      })
      .then(data => {

        //console.log("here with new user data: ", data)

        const welcomeReward = {
          userid: data.data.id,
          amount: Dbase.welcomeReward,
          reason: Dbase.welcomeText
        }

        //console.log("welcome reward: ", welcomeReward)

        const postURL = `${dbase}${Remote.customPath}${Remote.rewardsPath}`

        dispatch(postPublicData(postURL, welcomeReward))

        if ( user.uid && user.referral) {

          //https://127.0.0.1:8085/#/register/8fced3eb-e945-4291-b558-acc54e3fd4e6/Twitter

          const referrerReward = {
            userid: user.uid,
            amount: Dbase.referralReward,
            reason: Dbase.referralText,
            extrainfo: `${user.referral} ${user.email}`
          }

          dispatch(postPublicData(postURL, referrerReward))

        } else {

          txData = {
              code: "200",
              summary: `${RegisterConfig.passwordSuccess}`,
              time: `${dateText}`
          }
          dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))

        }

      })
      .catch(error => {
         //console.log("here? ", error.message)
         dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
      })
    } else {
      //console.log("here?")
      dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
    }
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

    const url = `${dbase}${Remote.userLogin}`
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
    })
    .catch(error => {
       dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
    })
  }
}

export const getUser = () => {
  return async (dispatch: AppDispatch, getState: Function) => {

     const state = getState()
     const jwt = state.userData.data.accessToken
     let d = new Date(Date.now())
      let dateText = d.toString()
      let txData = {
          code: "404",
          summary: `${UserConfig.getUserFailure}`,
          time: `${dateText}`
      }

      const url = `${dbase}${Remote.userPath}`
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
          dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
     })
  }
}

export const resetPassword = (user: Reset) => {
  return async (dispatch: AppDispatch, getState: Function) => {

    const state = getState()
  }
}

export const postPublicData = (url: string, data: object) => {
  return async (dispatch: AppDispatch) => {

    //console.log("Post: ", url, data)

    let d = new Date(Date.now())
    let dateText = d.toString()
    let txData: TxData = {
        code: "404",
        summary: `${Post.postFailure}`,
        time: `${dateText}`
    }
    dispatch(write({data: {}})(TxActionTypes.TX_INIT))

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
          const status = response.status
          const statusText = response.statusText
          return response.json()
          .then(data => {
              txData = {
                  code: status.toString(),
                  summary: `${Post.postFailure}: ${statusText}`,
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
            summary: `${Post.postSuccess}`,
            time: `${dateText}`
        }
        dispatch(write({data: txData})(TxActionTypes.TX_SUCCESS))
    })
    .catch(error => {
       console.log(`here? ${error.message} at ${dateText}`)
       dispatch(write({data: txData})(TxActionTypes.TX_FAILURE))
    })
  }
}

/*
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
*/
