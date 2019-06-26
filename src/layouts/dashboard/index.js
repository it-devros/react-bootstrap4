import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from '../../components'

import dashboardRoutes from '../../routes/dashboard'

import './style.scss'

const mapStateToProps = (state) => {
  return ({
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
  })
}


class DashboardLayout extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="dashboard-container">
        <Header {...this.props} />
        <div className="dashboard-content">
          <div className="container-fluid">
            <Switch>
              {
                dashboardRoutes.map((prop, key) => {
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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)


