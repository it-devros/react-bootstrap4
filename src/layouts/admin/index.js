import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


import { Header } from '../../components'

import adminRoutes from '../../routes/admin'


import './style.scss'

const mapStateToProps = (state) => {
  return ({
  })
}


const mapDispatchToProps = (dispatch) => {
  return ({
  })
}


class AdminLayout extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="admin-container">
        <Header {...this.props} />
        <div className="admin-content">
          <div className="container-fluid">
            <Switch>
              {
                adminRoutes.map((prop, key) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout)


