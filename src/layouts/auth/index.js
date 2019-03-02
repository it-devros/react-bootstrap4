import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import authRoutes from '../../routes/auth'

import './style.scss'

const mapStateToProps = (state) => {
	return ({
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
	})
}


class AuthLayout extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="auth-container">
        <div className="auth-content d-flex align-items-center justify-content-center">
          <Switch>
            {
              authRoutes.map((prop, key) => {
                if (prop.redirect)
                  return <Redirect from={prop.path} to={prop.pathTo} key={key} />
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                )
              })
            }
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout)


