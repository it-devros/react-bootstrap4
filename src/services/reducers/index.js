import { combineReducers } from 'redux'

import AuthReducer from './auth'
import CommonReducer from './common'

const rootReducer = combineReducers({
	auth: AuthReducer,
	common: CommonReducer
})

export default rootReducer