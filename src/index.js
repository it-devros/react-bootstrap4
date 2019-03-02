import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import indexRoutes from './routes'
import configureStore from './services/store'


import './assets/css/theme.css'


const hist = createBrowserHistory()
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {
          indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />
          })
        }
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

