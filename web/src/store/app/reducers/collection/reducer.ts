import { ActionProps, TableActionTypes, CollectionProps } from '../../../types'

const initialState: CollectionProps = {
  data: {
    info: []
  }
}

export const reducer = (state: CollectionProps = initialState, action: ActionProps): CollectionProps => {

  switch (action.type) {
    case TableActionTypes.TABLE_INIT: {
      const data = (action.payload as CollectionProps)
      return data
    }
    case TableActionTypes.TABLE_FAILURE: {
      return state
    }
    case TableActionTypes.TABLE_SUCCESS: {
      const data = (action.payload as CollectionProps)
      //console.log("got data: ", data)
      return {...state, ...data}
    }
    default:
      return state
  }
}
