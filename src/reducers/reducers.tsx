import { RECEIVE_DATA, UPDATE_RECORD } from '../actions/actions'


export default function records(state = [], action: any) {
  switch (action.type) {

    case UPDATE_RECORD:
      return [...action.records]

    case RECEIVE_DATA:
      return [...action.records.data]

    default:
      return state
  }
}