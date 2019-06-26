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


class SignUp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      password: '',
      confirmPassword: ''
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
      <div className="signup-page">
        <div className="card">
            <div className="card-header text-center">
                <Link className="navbar-brand" to="/">
                  生活見守りクラウド
                </Link>
                <span className="splash-description">
                  以下の必要項目をご入力ください
                </span> 
            </div>

            <div className="card-body">
              {
                this.state.error != '' ?
                  <div id="error-message" className="alert alert-danger">
                  </div>
                :
                  null
              }
              <div className="form-group">
                <label htmlFor="username">
                  ユーザーID
                </label>
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control form-control-lg"
                  id="username"
                  name="username"
                  autoComplete="off"
                  onChange={e => this.handleInput('username', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  パスワード
                </label>
                <input
                  type="password"
                  value={this.state.password}
                  className="form-control form-control-lg"
                  id="password"
                  name="password"
                  onChange={e => this.handleInput('password', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  パスワード
                </label>
                <input
                  type="password"
                  value={this.state.confirmPassword}
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={e => this.handleInput('confirmPassword', e.target.value)}
                />
              </div>
              
              <button className="btn btn-primary btn-lg btn-block">Register</button>
            </div>
            
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


