



import { DATA, COMMON } from '../../types'
import config from '../../env'
import API from '../API'
import AUTHAPI from '../AUTHAPI'

const DATA_URL = `${config.API_ROOT_URL}/data`


export const getTargets = () => {
  return (dispatch) => {
    let data = {
      method: 'get',
      url: `${DATA_URL}/target`
    }
    return API(data).then(res => {
      dispatch({
        type: DATA.SET_TARGETS,
        payload: {
          targets: res.targets
        }
      })
    }).catch(err => {
      throw err
    })
  }
}


export const getSensors = () => {
  return (dispatch) => {
    let data = {
      method: 'get',
      url: `${DATA_URL}/sensor`
    }
    return API(data).then(res => {
      dispatch({
        type: DATA.SET_SENSORS,
        payload: {
          sensors: res.sensors
        }
      })
    }).catch(err => {
      throw err
    })
  }
}

