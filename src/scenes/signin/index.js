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


class SignIn extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  handleSubmit() {
    this.props.history.push('/admin')
  }

  render() {

    return (
      <div className="signin-page">
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
              
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={this.handleSubmit}
              >
                Log in
              </button>
            </div>
            
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


