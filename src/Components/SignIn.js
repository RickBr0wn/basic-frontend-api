import React, { useState, useContext } from 'react'
import { Button } from 'simple-react-toolkit'
import styled from 'styled-components'
import { StoreContext } from '../Config/Store'
import { withRouter } from 'react-router-dom'

export const Container = styled.form`
  background: lightblue;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledTextInput = styled.input`
  font-size: 1.5rem;
  margin: 5px;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: ${props => props.inputWidth || '100%'};
  display: border-box;
  transition: all 0.3s;
  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
    border-color: ${props => props.inputColor || '#55c57a'};
  }
  ::-webkit-input-placeholder {
    color: #999;
  }
  :focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
`

export function SignIn({ history }) {
  const { submitLogin } = useContext(StoreContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const credentials = {
      email,
      password
    }

    submitLogin(credentials)
    history.push('/products/')
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <Container onSubmit={e => handleSubmit(e)}>
        <StyledTextInput
          inputColor={'#4186F4'}
          inputWidth={'300px'}
          placeholder={'enter email address'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <StyledTextInput
          inputColor={'#4186F4'}
          inputWidth={'300px'}
          placeholder={'enter password'}
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <Button type='submit'>Submit</Button>
      </Container>
    </>
  )
}

export default withRouter(SignIn)
