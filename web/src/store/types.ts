import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { Decimal } from 'decimal.js'

// Store stuff
export interface ApplicationState {
  appData: AppDataProps
  userData: UserProps
  tx: TxProps
}

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}

export type AppDispatch = ThunkDispatch<ApplicationState, any, ActionProps>

// Stuff pertinent to make this app' work
export interface AppData {
  activePage: string
}

export interface AppDataProps extends PayloadProps {
  data: AppData
}

// Info (about etc.) stuff
export const enum InfoTypes {
  ABOUT = "about",
  HELP = "help",
  CONTACT = "contact"
}

export interface InfoProps {
  title: string
  data: string[]
}

// User
export interface SignIn {
  email: string
  password: string
}

export interface User {
  accessToken: string
  refreshToken: string
  info: object
}

export interface UserProps extends PayloadProps {
  data: User
}

//Tx stuff
export interface TxData {
  code: string
  summary: string
  time: string
}

export interface TxProps extends PayloadProps {
  data: TxData
}

// Action types
export const enum AppDataActionTypes {
  APPDATA_INIT = '@@AppDataActionTypes/APPDATA_INIT',
  APPDATA_SUCCESS = '@@AppDataActionTypes/APPDATA_SUCCESS',
  APPDATA_FAILURE = '@@AppDataActionTypes/APPDATA_FAILURE'
}

// put action types
export const enum TxActionTypes {
  TX_INIT = '@@TxActionTypes/TX_INIT',
  TX_PENDING = '@@TxActionTypes/TX_PENDING',
  TX_SUCCESS = '@@TxActionTypes/TX_SUCCESS',
  TX_FAILURE = '@@TxActionTypes/TX_FAILURE'
}

export const enum UserActionTypes {
  USER_INIT = '@@UserActionTypes/USER_INIT',
  USER_SUCCESS = '@@UserActionTypes/USER_SUCCESS',
  USER_FAILURE = '@@UserActionTypes/USER_FAILURE'
}
