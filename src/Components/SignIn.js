import React, { useState, useContext } from 'react'
import { Button } from 'simple-react-toolkit'
import { StoreContext } from '../Config/Store'
import { withRouter } from 'react-router-dom'
import { StyledContainer } from '../StyledComponents/StyledContainer'
import { StyledTextInput } from '../StyledComponents/StyledTextInput'
import { StyledSignIn } from '../StyledComponents/StyledSignIn'

export function SignIn({ history }) {
  const { submitLogin } = useContext(StoreContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <StyledContainer>
      <h1>Sign In Page</h1>
      <StyledSignIn
        onSubmit={e => {
          e.preventDefault()
          submitLogin(history, {
            email,
            password
          })
        }}>
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
      </StyledSignIn>
    </StyledContainer>
  )
}

export default withRouter(SignIn)
