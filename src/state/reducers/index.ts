import { combineReducers } from 'redux'
import bankReduser from './bankReducer'

const reducers = combineReducers({
  bank: bankReduser,
})

export default reducers

export type State = ReturnType<typeof reducers>
