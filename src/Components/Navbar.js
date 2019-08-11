import React from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Config/Store'
import { StyledNavbar } from '../StyledComponents'

const Navbar = () => {
  const { state } = React.useContext(StoreContext)
  return (
    <StyledNavbar>
      <h1>
        <Link to='/'>Random Company Inc</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {state.loggedIn.token ? (
          <>
            <li>
              <Link to='/orders/'>Orders</Link>
            </li>
            <li>
              <Link to='/add-product/'>Add New Product</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to='/sign-in/'>Sign In</Link>
          </li>
        )}
        <li>
          <Link to='/products/'>Products</Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
