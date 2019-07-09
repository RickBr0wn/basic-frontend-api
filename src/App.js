import React from 'react'
import Store from './Config/Store'
import SignIn from './Components/SignIn'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Orders from './Components/Orders'
import AddProduct from './Components/AddProduct'
import { CssReset } from 'simple-react-toolkit'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <>
      <CssReset />
      <Router>
        <Store>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/products' component={Products} />
            <Route path='/orders' component={Orders} />
            <Route path='/add-product/' component={AddProduct} />
          </Switch>
        </Store>
      </Router>
    </>
  )
}
