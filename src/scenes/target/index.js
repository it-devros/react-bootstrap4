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


class Target extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="target-page">

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="card text-center">
              <div className="card-body p-1">
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


        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-1">
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

                      <tr>
                        <td rowSpan='7'>
                          <Link to="/dashboard/sensor/12"><span>環境センサー１</span></Link>
                        </td>
                        <td>
                          温度
                        </td>
                        <td>
                          <span>28.0</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>湿度</td>
                        <td>
                          <span>61.2</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>照度</td>
                        <td>
                          <span>10203</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>
                      
                      <tr>
                        <td>加速度</td>
                        <td>
                          <span>-1050.3</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>臭い</td>
                        <td>
                          <span>10767</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>騒音</td>
                        <td>
                          <span>42.1</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>気圧</td>
                        <td>
                          <span>1013.6</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td rowSpan='7'>
                          <span>環境センサー２</span>
                        </td>
                        <td>温度</td>
                        <td>
                          <span>19.6</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>湿度</td>
                        <td>
                          <span>61.2</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>照度</td>
                        <td>
                          <span>10203</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>加速度</td>
                        <td>
                          <span>-1050.3</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>臭い</td>
                        <td>
                          <span>10767</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>騒音</td>
                        <td>
                          <span>42.1</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>気圧</td>
                        <td>
                          <span>1013.6</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td rowSpan='7'>
                          <span>環境センサー３</span>
                        </td>
                        <td>温度</td>
                        <td>
                          <span>20.1</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>湿度</td>
                        <td>
                          <span>61.2</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>照度</td>
                        <td>
                          <span>10203</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>加速度</td>
                        <td>
                          <span>-1050.3</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>臭い</td>
                        <td>
                          <span>10767</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>騒音</td>
                        <td>
                          <span>42.1</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td>気圧</td>
                        <td>
                          <span>1013.6</span>
                        </td>
                        <td>
                          <span>2019/03/05　11:12:03</span>
                        </td>
	                    </tr>

                      <tr>
                        <td colSpan='2'>体重計</td>
                        <td>
                          <span>40.5</span>
                        </td>
                        <td>
                          <span>2019/02/05　06:35:17</span>
                        </td>
	                    </tr>

                      <tr>
                        <td rowSpan='2'>
                          <span>血圧</span>
                        </td>
                        <td>最高血圧</td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                      <tr>
                        <td>最低血圧</td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                      <tr>
                        <td colSpan='2'>体温計</td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                      <tr>
                        <td colSpan='2'>活動量</td>
                        <td>
                          <span></span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                      <tr>
                        <td colSpan='2'>睡眠</td>
                        <td>
                          <span>離床</span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                      <tr>
                        <td colSpan='2'>運動</td>
                        <td>
                          <span>未装着</span>
                        </td>
                        <td>
                          <span></span>
                        </td>
	                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Target)


