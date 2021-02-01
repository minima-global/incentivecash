import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { Decimal } from 'decimal.js'

// Store stuff
export interface ApplicationState {
  appData: AppDataProps
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

// Action types
export const enum AppDataActionTypes {
  APPDATA_INIT = '@@AppDataActionTypes/APPDATA_INIT',
  APPDATA_SUCCESS = '@@AppDataActionTypes/APPDATA_SUCCESS',
  APPDATA_FAILURE = '@@AppDataActionTypes/APPDATA_FAILURE'
}
