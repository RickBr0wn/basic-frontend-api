import React from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Config/Store'

const Navbar = () => {
  const { state } = React.useContext(StoreContext)
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {state.loggedIn ? null : (
          <li>
            <Link to='/sign-in/'>Sign In</Link>
          </li>
        )}
        <li>
          <Link to='/products/'>Products</Link>
        </li>
        {state.loggedIn ? (
          <li>
            <Link to='/orders/'>Orders</Link>
          </li>
        ) : null}
        {state.loggedIn ? (
          <li>
            <Link to='/add-product/'>Add New Product</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Navbar
