

import { DATA } from '../../types'

const initState = {
  targets: [],
  sensors: []
}


const DataReducer = (state = initState, action) => {
  const { type, payload } = action
  
  switch(type){

    case DATA.SET_TARGETS:
      return {
        ...state,
        targets: payload.targets,
      }
    
    case DATA.SET_SENSORS:
      return {
        ...state,
        sensors: payload.sensors
      }

    default:
      return state
  }
}

export default DataReducer