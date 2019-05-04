import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './pathes'
import LoginPage from './page/Login'
import Home from './page/Home'

const Routes = () => (
  <Switch>
    <Route path={routes.HOME} exact component={Home} />
    <Route path={routes.LOGIN} component={LoginPage} />
    <Route path={'/movie/:id'} component={LoginPage} />
    <Route render={() => <h1>4o4</h1>} />
  </Switch>
)

export default Routes