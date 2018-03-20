import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router'

import './base.scss'

import store, { history } from './store'

import LandingPage from './containers/LandingPage'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>
)

render(<App />, document.getElementById('app'))
