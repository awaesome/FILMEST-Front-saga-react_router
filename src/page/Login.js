import React from 'react'
import Form from '../components/Form'
import routes from '../pathes'

const Login = ({ location }) => {
  const { from } = location.state || { from: { pathname: routes.HOME } }
  const { pathname } = from

  return (
    <Form from={pathname} form='login' />
  )
}

export default Login