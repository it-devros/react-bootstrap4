
import { USER } from '../../types'

const initState = {
  is_authed: false,
  user: {}
}


const AuthReducer = (state = initState, action) => {
  const { type, payload} = action
  
  switch(type){

    case USER.SIGNED_IN:
      return {
        ...state,
        is_authed: true,
        user: payload.user
      }

    case USER.SIGNED_OUT:
      return {
        ...state,
        is_authed: false,
        user: {}
      }

    default:
        return state
  }
}

export default AuthReducer