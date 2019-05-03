import React, { useState } from 'react'
import { connect } from 'react-redux'
import { userLoggin } from '../actions/userActions'
import styled from 'styled-components'

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

const Form = ({ userLoggin }) => {

  const [state, setState] = useState({ email: '', password: ''})

  const handleLogin = (e) => {
    e.preventDefault()
    userLoggin(state.email, state.password)
  }

  const handleChange = ({ target }) => {
    setState(prevState => (
      {
        ...prevState,
        [target.name]: target.value
      }
    ))
  }

  console.log(state)
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

export default connect(null, { userLoggin })(Form)