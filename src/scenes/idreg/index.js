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


class IDreg extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user_ID: 'U00101',
      password: 'U00101',
      username: '山田　太郎',
      email: 'ymd.t@kaminokawa.co.jp',

      target_ID: 'T00200'
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
      <div className="idreg-page">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">
                ID登録
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
                        <th>ユーザーID</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            value={this.state.user_ID}
                            onChange={e => this.handleInput('user_ID', e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>パスワード</th>
                        <td>
                          <input
                            type="password"
                            className="form-control form-control-md"
                            value={this.state.password}
                            onChange={e => this.handleInput('user_ID', e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>ユーザー氏名</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            value={this.state.username}
                            onChange={e => this.handleInput('username', e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th>Emailアドレス</th>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            value={this.state.email}
                            onChange={e => this.handleInput('email', e.target.value)}
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
              更新
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
                        <th>対象者コード</th>
                        <th>対象者氏名</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value={this.state.target_ID}
                            onChange={e => this.handleInput('target_ID', e.target.value)}
                          />
                        </td>
                        <td>
                          鈴木　花子
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control form-control-sm" />
                        </td>
                        <td>
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control form-control-sm" />
                        </td>
                        <td>
                          
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" className="form-control form-control-sm" />
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

export default connect(mapStateToProps, mapDispatchToProps)(IDreg)


