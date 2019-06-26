import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as DataActions from '../../services/actions/data'

import './style.scss'
import sensor from '../sensor';

const mapStateToProps = (state) => {
  return ({
    targets: state.data.targets,
    sensors: state.data.sensors
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
    dataActions: bindActionCreators(DataActions, dispatch)
  })
}


class Target extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

    this.renderSensor = this.renderSensor.bind(this)
  }

  componentDidMount() {
    this.props.dataActions.getTargets()
    this.props.dataActions.getSensors()
  }

  renderSensor(sensor) {
    let data = []
    data.push(
      <tr key={'temperature'}>
        <td rowSpan='7'>
          <span>{sensor.name}</span>
        </td>
        <td>
          温度
        </td>
        <td>
          <span>{sensor.temperature.data}</span>
        </td>
        <td>
          <span>{sensor.temperature.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'humitdity'}>
        <td>湿度</td>
        <td>
          <span>{sensor.humidity.data}</span>
        </td>
        <td>
          <span>{sensor.humidity.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'illuminance'}>
        <td>照度</td>
        <td>
          <span>{sensor.illuminance.data}</span>
        </td>
        <td>
          <span>{sensor.illuminance.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'acceleration'}>
        <td>加速度</td>
        <td>
          <span>{sensor.acceleration.data}</span>
        </td>
        <td>
          <span>{sensor.acceleration.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'odor'}>
        <td>臭い</td>
        <td>
          <span>{sensor.odor.data}</span>
        </td>
        <td>
          <span>{sensor.odor.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'noise'}>
        <td>騒音</td>
        <td>
          <span>{sensor.noise.data}</span>
        </td>
        <td>
          <span>{sensor.noise.updated_at}</span>
        </td>
      </tr>
    )
    data.push(
      <tr key={'atmospheric'}>
        <td>気圧</td>
        <td>
          <span>{sensor.atmospheric_pressure.data}</span>
        </td>
        <td>
          <span>{sensor.atmospheric_pressure.updated_at}</span>
        </td>
      </tr>
    )
    return data
  }

  render() {

    const { targets, sensors } = this.props

    return (
      <div className="target-page">

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card text-center">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>対象者</th>
                        <td>T00200</td>
                      </tr>
                      <tr>
                        <th>対象者氏名</th>
                        <td>鈴木　花子</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          targets.map(target => {
            return (
              <div key={target._id} className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-hover table-bordered first">
                          <thead>
                            <tr>
                              <th colSpan='2'>センサー</th>
                              <th>データ</th>
                              <th>更新日時</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              sensors.map(sensor => {
                                return this.renderSensor(sensor)
                              })
                            }
                            <tr>
                              <td colSpan='2'>体重計</td>
                              <td>
                                <span>{target.weight_scale.data}</span>
                              </td>
                              <td>
                                <span>{target.weight_scale.updated_at}</span>
                              </td>
                            </tr>
                            <tr>
                              <td rowSpan='2'>
                                <span>血圧</span>
                              </td>
                              <td>最高血圧</td>
                              <td>
                                <span>{target.blood_pressure[0].data}</span>
                              </td>
                              <td>
                                <span>{target.blood_pressure[0].updated_at}</span>
                              </td>
                            </tr>

                            <tr>
                              <td>最低血圧</td>
                              <td>
                                <span>{target.blood_pressure[1].data}</span>
                              </td>
                              <td>
                                <span>{target.blood_pressure[1].updated_at}</span>
                              </td>
                            </tr>

                            <tr>
                              <td colSpan='2'>体温計</td>
                              <td>
                                <span>{target.thermometer ? target.thermometer.data : null}</span>
                              </td>
                              <td>
                                <span>{target.thermometer ? target.thermometer.updated_at : null}</span>
                              </td>
                            </tr>

                            <tr>
                              <td colSpan='2'>活動量</td>
                              <td>
                                <span>{target.activity_amount ? target.activity_amount.data : null}</span>
                              </td>
                              <td>
                                <span>{target.activity_amount ? target.activity_amount.updated_at : null}</span>
                              </td>
                            </tr>

                            <tr>
                              <td colSpan='2'>睡眠</td>
                              <td>
                                <span>{target.sleep.data}</span>
                              </td>
                              <td>
                                <span>{target.sleep.updated_at}</span>
                              </td>
                            </tr>

                            <tr>
                              <td colSpan='2'>運動</td>
                              <td>
                                <span>{target.motion.data}</span>
                              </td>
                              <td>
                                <span>{target.motion.updated_at}</span>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Target)


