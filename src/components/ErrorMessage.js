import React from 'react'
import styled, { keyframes } from 'styled-components'

const animationSlideIn = keyframes`
  0% {
    transform: translateX(300px);
  }
  
  20% {
    transform: translateX(-30px);
  }
    
  80% {
    transform: translateX(-30px);
  }
  
  100% {
    transform: translateX(300px);
  }
`

const ErrorBox = styled.article`
  position: absolute;
  bottom: 30px;
  right: 0;
  min-width: 100px;
  max-width: 300px;
  padding: 5px 30px;
  border-radius: 4px;
  background-color: coral;
  color: bisque;
  text-align: center;
  animation: ${animationSlideIn} 5s cubic-bezier(0.42, 0.52, 0, 1.26) forwards;
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
`

const Message = styled.p`
  font-size: 1.1rem;
  margin: 10px;
  padding: 0;
`

const ErrorMessage = ({ error, resetError }) => {
  setTimeout(() => resetError(), 5000)
  return (
    <ErrorBox>
      <Title>{error.code}</Title>
      <Message>{error.message}</Message>
    </ErrorBox>
  )
}

export default ErrorMessage
