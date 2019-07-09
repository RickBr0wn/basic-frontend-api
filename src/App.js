import React from 'react'
import Store from './Config/Store'
import SignIn from './Components/SignIn'
import { CssReset } from 'simple-react-toolkit'
import styled from 'styled-components'

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <BodyContainer>
      <CssReset />
      <Store>
        <SignIn />
      </Store>
    </BodyContainer>
  )
}
