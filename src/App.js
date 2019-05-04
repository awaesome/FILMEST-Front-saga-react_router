import React from 'react'
import Routes from './Routes'
import Header from './page/Header'
import ErrorMessage from './components/ErrorMessage'
import { connect } from 'react-redux'
import { selectError, selectUser } from './selectors/selectors'
import { resetError } from './actions/errorActions'
import { removeLoginPropose } from './actions/userActions'
import LoginProposal from './components/LoginProposal'

const App = ({ children, error, resetError, user, removeLoginPropose }) => (
  <>
    <Header />
    <Routes />

    {
      error.isError && <ErrorMessage error={error} resetError={resetError} />
    }

    {
      user.proposeLogin && <LoginProposal removeLoginPropose={removeLoginPropose} />
    }

  </>
)

const mapStateToProps = state => (
  {
    error: selectError(state),
    user: selectUser(state)
  }
)

export default connect(mapStateToProps, { resetError, removeLoginPropose })(App)

