import React from 'react'
import { StoreContext } from '../Config/Store'
import LineItem from './LineItem'
import { StyledContainer } from '../StyledComponents'

const Products = () => {
  const { state } = React.useContext(StoreContext)
  const { products } = state

  return (
    <StyledContainer>
      <h1>The Products Page</h1>
      {products &&
        products.products.map(product => (
          <LineItem key={product._id} item={product} />
        ))}
    </StyledContainer>
  )
}

export default Products
