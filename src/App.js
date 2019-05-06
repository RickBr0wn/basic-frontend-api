import React, { useEffect, useReducer } from 'react'

const fetchAllProducts = async dispatch =>
  await fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(json =>
      dispatch({ type: 'UPDATE_PRODUCTS', payload: JSON.stringify(json) })
    )
    .catch(error => console.log(error))

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return state
    default:
      return state
  }
}
const ProductList = () => {
  const [data, dispatch] = useReducer(reducer, [])
  useEffect(() => {
    fetchAllProducts(dispatch)
  }, [])

  return <div>{console.log(data.products)}</div>
}

function App() {
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default App
