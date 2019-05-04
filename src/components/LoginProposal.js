import React from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router'
import routes from '../pathes'

const Article = styled.article`
  position: absolute;
  display: grid;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  place-items: center center;
  background-color: rgba(0,0,0,.8);
  z-index: 5;
`

const Modal = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background: bisque;
  border-radius: 4px;
  padding: 10px;
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 500;
`

const Button = styled.button`
  width: 80px;
  height: 25px;
  margin: 0 10px;
  background-color: transparent;
  border: 1px solid coral;
  border-radius: 2px;
  font-family: consolas, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  outline: none;
  
    &:hover {
      background-color: lightcoral;
      color: bisque;
    }
`

const LoginProposal = ({ removeLoginPropose }) => {
  return (
    <Article>
      <Modal>
        <Title children='You need to log in to visit this page.'/>
        <div>
          <Button onClick={() => <Redirect to={routes.LOGIN} />} children='LOGIN' />
          <Button onClick={removeLoginPropose} children='CANCEL' />
        </div>
      </Modal>
    </Article>
  )
}

export default LoginProposal
