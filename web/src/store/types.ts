import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { Decimal } from 'decimal.js'

// Store stuff
export interface ApplicationState {
  appData: AppDataProps
  userData: UserProps
  collectionData: CollectionProps,
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
export interface UserRegister {
  email: string
  referral: string
}

export interface UserRegisterPassword {
  email: string
  referral: string
  token: string
  password: string
}

export interface SignIn {
  email: string
  password: string
}

export interface CreateUser {
  email: string
  password: string
  role: string
}

export interface UserInfo {
  avatar: string
  description: string
  email: string
  first_name: string
  id: string
  language: string
  last_access: string
  last_name: string
  last_page: string
  location: string
  password: string
  role: string
  status: string
  tags: string
  tfa_secret: string
  theme: string
  title: string
  token: string
}

export interface User {
  accessToken: string
  refreshToken: string
  info: UserInfo
}

export interface UserProps extends PayloadProps {
  data: User
}

// Collections
export interface Collection {
  info: []
}

export interface CollectionProps extends PayloadProps {
  data: Collection
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

export const enum TableActionTypes {
  TABLE_INIT = '@@TableActionTypes/TABLE_INIT',
  TABLE_SUCCESS = '@@TableActionTypes/TABLE_SUCCESS',
  TABLE_FAILURE = '@@TableActionTypes/TABLE_FAILURE'
}
