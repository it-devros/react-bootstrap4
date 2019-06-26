import { combineReducers } from 'redux'

import AuthReducer from './auth'
import CommonReducer from './common'
import DataReducer from './data'

const rootReducer = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
  data: DataReducer
})

export default rootReducer