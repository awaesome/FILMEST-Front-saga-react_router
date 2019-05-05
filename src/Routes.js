import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './pathes'
import LoginPage from './page/Login'
import Home from './page/Home'

const Routes = () => (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route path={routes.LOGIN} component={LoginPage} />
    <Route path={routes.MOVIE_ID} render={() => <h1>ID</h1>} />
    <Route render={() => <h1>4o4</h1>} />
  </Switch>
)

export default Routes