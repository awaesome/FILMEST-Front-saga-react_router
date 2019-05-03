import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { getMovies } from './actions/moviesActions'
import { store } from './store/createStore'
import routes from './pathes'
import LoginPage from './page/Login'


const Routes = () => (
  <Switch>
    <Route path={routes.HOME} exact render={
      () =>
        <>
          <Link to={routes.LOGIN} children="login" />
          <button onClick={() => store.dispatch(getMovies())}>fwefw</button>
        </>
    } />
    <Route path={routes.LOGIN} component={LoginPage} />
    <Route render={() => <h1>4o4</h1>} />
  </Switch>
)

export default Routes