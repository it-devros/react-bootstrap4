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


class Admin extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="admin-page">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">
                マイページ（管理者）
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
                        <td>A00001</td>
                      </tr>
                      <tr>
                        <th>ユーザー氏名</th>
                        <td>佐藤　一郎</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered first">
                    <tbody>
                      <tr>
                        <th>
                          <Link to="/admin/idreg">ID登録</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link to="/admin/idlist">ID一覧</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link to="/admin/targetreg">対象者登録</Link>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <Link to="/admin/targetlist">対象者一覧</Link>
                        </th>
                      </tr>
                      {/* <tr>
                        <th>
                          <Link to="/admin/targetdata">対象者データ一覧</Link>
                        </th>
                      </tr> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin)


