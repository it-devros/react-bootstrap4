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


class Targetdata extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="targetdata-page">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">
                対象者データ一覧
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered first">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>対象者ID</th>
                        <th>対象者氏名</th>
                        <th>更新日時</th>
                        <th colSpan="2">環境センサ1</th>
                        <th colSpan="2">環境センサ2</th>
                        <th colSpan="2">環境センサ3</th>
                        <th colSpan="2">ヘルスケア</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <td rowSpan="8">1</td>
                        <td rowSpan="8">T00200</td>
                        <td rowSpan="8">鈴木 花子</td>
                        <td rowSpan="8">2019/03/05 11:12:03</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>体重</td>
                        <td>活動量</td>
                      </tr>
                      <tr>
                        <td>28.1</td>
                        <td>10767</td>
                        <td>19.6</td>
                        <td>10767</td>
                        <td>20.1</td>
                        <td>10767</td>
                        <td>40.5</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>最高血圧</td>
                        <td>睡眠</td>
                      </tr>
                      <tr>
                        <td>61.2</td>
                        <td>42.1</td>
                        <td>61.2</td>
                        <td>42.1</td>
                        <td>61.2</td>
                        <td>42.1</td>
                        <td>　</td>
                        <td>離床</td>
                      </tr>
                      <tr>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>最低血圧</td>
                        <td>運動</td>
                      </tr>
                      <tr>
                        <td>10203</td>
                        <td>1013.6</td>
                        <td>10203</td>
                        <td>1013.6</td>
                        <td>10203</td>
                        <td>1013.6</td>
                        <td>　</td>
                        <td>未装着</td>
                      </tr>
                      <tr>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>体温</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>-1050.3</td>
                        <td>　</td>
                        <td>-1050.3</td>
                        <td>　</td>
                        <td>-1050.3</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>

                      <tr>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>体重</td>
                        <td>活動量</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>最高血圧</td>
                        <td>睡眠</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>最低血圧</td>
                        <td>運動</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>体温</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>

                      <tr>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td rowSpan="8"></td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>温度</td>
                        <td>臭い</td>
                        <td>体重</td>
                        <td>活動量</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>湿度</td>
                        <td>騒音</td>
                        <td>最高血圧</td>
                        <td>睡眠</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>照度</td>
                        <td>気圧</td>
                        <td>最低血圧</td>
                        <td>運動</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>加速度</td>
                        <td>　</td>
                        <td>体温</td>
                        <td>　</td>
                      </tr>
                      <tr>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
                        <td>　</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(Targetdata)


