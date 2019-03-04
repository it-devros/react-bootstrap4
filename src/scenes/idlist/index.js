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


class IDlist extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="idlist-page">

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="page-header">
              <h2 className="pageheader-title">
                ID一覧
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered first">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>ユーザーID</th>
                        <th>ユーザー氏名</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>11</td>
                        <td>user</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11</td>
                        <td>user</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11</td>
                        <td>user</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11</td>
                        <td>user</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>11</td>
                        <td>user</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(IDlist)


