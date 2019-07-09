import React from 'react'
import { StoreContext } from '../Config/Store'
import LineItem from './LineItem'

const Products = () => {
  const { state } = React.useContext(StoreContext)
  const { products } = state

  return (
    <div>
      <h1>The Products Page</h1>
      {products &&
        products.products.map(product => (
          <LineItem key={product._id} item={product} />
        ))}
    </div>
  )
}

export default Products
