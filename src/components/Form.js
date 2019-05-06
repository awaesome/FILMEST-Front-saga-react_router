import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { userLoggin, userRegistration } from '../actions/userActions'
import { selectUser } from '../selectors/selectors'
import { compose } from 'redux'
import { withRouter } from 'react-router'

const Fieldset = styled.fieldset`
  margin: 50px auto;
  text-align: center;
  max-width: 300px;
`

const Label = styled.label`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`

const Input = styled.input`
  margin: 0 10px
`

const Form = ({ history, from, userLoggin, userRegistration, user, form }) => {

  const [state, setState] = useState({ email: '', password: ''})

  const handleLogin = (e) => {
    e.preventDefault()
    switch (form) {
      case 'registration': {
        return userRegistration(state.email, state.password)
      }
      case 'login': {
        return userLoggin(state.email, state.password)
      }
      default: return
    }

  }

  const handleChange = ({ target }) => {
    setState(prevState => (
      {
        ...prevState,
        [target.name]: target.value
      }
    ))
  }

  if (user.authorized) {
    history.push(from)
  }

  return (
    <form onSubmit={ handleLogin }>
      <Fieldset>
        <legend>Fill in credentials</legend>
        <Label>
          email:
          <Input type='text' onChange={ handleChange } value={state.email} name='email' placeholder='email@example.com'/>
        </Label>
        <Label>
          password:
          <Input type='password' onChange={ handleChange } value={state.password} name='password' />
        </Label>
        <button type='submit' children='Submit'/>
      </Fieldset>
    </form>
  )
}

const mapStateToProps = state => ({user: selectUser(state)})

export default compose(
  withRouter,
  connect(mapStateToProps, { userLoggin, userRegistration })
)(Form)