import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { ApplicationState, ActionProps } from './types'

import { reducer as appDataReducer } from './app/reducers/app/reducer'
import { reducer as userReducer } from './app/reducers/user/reducer'
import { reducer as collectionReducer } from './app/reducers/collection/reducer'
import { reducer as txReducer } from './app/reducers/tx/reducer'

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  appData: appDataReducer,
  userData: userReducer,
  collectionData: collectionReducer,
  tx: txReducer
})

export function configureStore(
  initialState: ApplicationState
): Store<ApplicationState, ActionProps> {

  // create the redux-saga middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}
