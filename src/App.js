import React from 'react'
import Store from './Config/Store'
import Data from './Components/Data'
import SignIn from './Components/SignIn'

export default function App() {
  return (
    <Store>
      <SignIn />
      <Data />
    </Store>
  )
}
