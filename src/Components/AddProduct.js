import React from 'react'
import { StoreContext } from '../Config/Store'

const AddProduct = () => {
  const { state, dispatch } = React.useContext(StoreContext)

  return (
    <div>
      <h1>The Add Product Page</h1>
    </div>
  )
}

export default AddProduct
