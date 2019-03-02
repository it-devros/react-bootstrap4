import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


import './style.scss'

const mapStateToProps = (state) => {
	return ({
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
	})
}


class Sensor extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="sensor-page">

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card text-center">
              <div className="card-body p-1">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>対象者ID</th>
                        <td>T00200</td>
                      </tr>
                      <tr>
                        <th>対象者氏名</th>
                        <td>鈴木　花子</td>
                      </tr>
                      <tr>
                        <th>対象センサー</th>
                        <td>環境１温度</td>
                      </tr>
                      <tr>
                        <th>対象期間</th>
                        <td>
                          <div className="d-flex flex-wrap align-items-center justify-content-center">
                            <input type="text" className="form-control form-control-sm col-5" />
                            <span className="col-2">～</span>
                            <input type="text" className="form-control form-control-sm col-5" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-wrap align-items-end justify-content-start button-container">
            <button
              className="btn btn-primary btn-md btn-block col-4 mr-4"
            >
              更新
            </button>
            <button
              className="btn btn-primary btn-md btn-block col-4 m-0"
            >
              ダウンロード
            </button>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sensor)


