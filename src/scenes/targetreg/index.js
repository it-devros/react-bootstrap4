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


class Targetreg extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      target_ID: 'T00200',
      target_name: '鈴木　花子'
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {

    return (
      <div className="targetreg-page">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">
                対象者登録
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card text-center">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>対象者コード</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            value={this.state.target_ID}
                            onChange={e => this.handleInput('target_ID', e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>対象者氏名</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            value={this.state.target_name}
                            onChange={e => this.handleInput('target_name', e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-wrap align-items-start justify-content-start button-container">
            <button
              className="btn btn-primary btn-md btn-block col-4"
            >
              実行
            </button>
          </div>
        </div>


        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered first">
                    <thead>
                      <tr>
                        <th colSpan="2">センサー</th>
                        <th>アラート</th>
                        <th>下限</th>
                        <th>上限</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <th rowSpan="7"><span>環境センサー１</span></th>
                        <th>温度</th>
                        <td><input className="form-control custom-check" id="CheckBox1" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="12.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="28.0" /></td>
                      </tr>

                      <tr>
                        <th>湿度</th>
                        <td><input className="form-control custom-check" id="CheckBox2" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="70.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                      </tr>

                      <tr>
                        <th>照度</th>
                        <td><input className="form-control custom-check" id="CheckBox3" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>加速度</th>
                        <td><input className="form-control custom-check" id="CheckBox4" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="2000.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>臭い</th>
                        <td><input className="form-control custom-check" id="CheckBox5" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="30000" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>騒音</th>
                        <td><input className="form-control custom-check" id="CheckBox6" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>気圧</th>
                        <td><input className="form-control custom-check" id="CheckBox7" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th rowSpan="7"><span>環境センサー２</span></th>
                        <th>温度</th>
                        <td><input className="form-control custom-check" id="CheckBox8" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="12.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="28.0" /></td>
                      </tr>

                      <tr>
                        <th>湿度</th>
                        <td><input className="form-control custom-check" id="CheckBox9" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="70.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                      </tr>

                      <tr>
                        <th>照度</th>
                        <td><input className="form-control custom-check" id="CheckBox10" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>
                      
                      <tr>
                        <th>加速度</th>
                        <td><input className="form-control custom-check" id="CheckBox11" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="2000.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>臭い</th>
                        <td><input className="form-control custom-check" id="CheckBox12" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="30000" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>騒音</th>
                        <td><input className="form-control custom-check" id="CheckBox13" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>気圧</th>
                        <td><input className="form-control custom-check" id="CheckBox14" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th rowSpan="7"><span>環境センサー３</span></th>
                        <th>温度</th>
                        <td><input className="form-control custom-check" id="CheckBox15" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="12.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="28.0" /></td>
                      </tr>

                      <tr>
                        <th>湿度</th>
                        <td><input className="form-control custom-check" id="CheckBox16" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="70.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                      </tr>

                      <tr>
                        <th>照度</th>
                        <td><input className="form-control custom-check" id="CheckBox17" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>加速度</th>
                        <td><input className="form-control custom-check" id="CheckBox18" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="2000.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>臭い</th>
                        <td><input className="form-control custom-check" id="CheckBox19" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="30000" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>騒音</th>
                        <td><input className="form-control custom-check" id="CheckBox20" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="100.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th>気圧</th>
                        <td><input className="form-control custom-check" id="CheckBox21" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th colSpan="2">体重計</th>
                        <td><input className="form-control custom-check" id="CheckBox22" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="35.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="45.0" /></td>
                      </tr>

                      <tr>
                        <th rowSpan="2"><span>血圧</span></th>
                        <th>最高血圧</th>
                        <td><input className="form-control custom-check" id="CheckBox23" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="150.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="200.0" /></td>
                      </tr>
                      
                      <tr>
                        <th>最低血圧</th>
                        <td><input className="form-control custom-check" id="CheckBox24" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="20.0" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="70.0" /></td>
                      </tr>

                      <tr>
                        <th colSpan="2">体温計</th>
                        <td><input className="form-control custom-check" id="CheckBox25" type="checkbox" checked="true" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="37.6" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th colSpan="2">活動量</th>
                        <td><input className="form-control custom-check" id="CheckBox26" type="checkbox" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                        <td><input className="form-control form-control-sm" type="text" maxLength="7" value="" /></td>
                      </tr>

                      <tr>
                        <th colSpan="2">睡眠</th>
                        <td><input className="form-control custom-check" id="CheckBox27" type="checkbox" /></td>
                        <td>
                        </td>
                        <td>
                        </td>
                      </tr>

                      <tr>
                        <th colSpan="2">運動</th>
                        <td><input className="form-control custom-check" id="CheckBox27" type="checkbox" /></td>
                        <td>
                        </td>
                        <td>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-wrap align-items-start justify-content-start button-container">
            <button
              className="btn btn-primary btn-md btn-block col-4 mr-4"
            >
              登録・更新
            </button>
            <button
              className="btn btn-primary btn-md btn-block col-4 m-0"
            >
              キャンセル
            </button>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Targetreg)


