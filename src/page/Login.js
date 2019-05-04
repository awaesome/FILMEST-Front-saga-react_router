import React from 'react'
import Form from '../components/LoginForm'
import routes from '../pathes'

const LoginPage = ({ location }) => {
  const { from } = location.state || { from: { pathname: routes.HOME } }
  const { pathname } = from

  return (
    <Form from={pathname} />
  )
}

export default LoginPage