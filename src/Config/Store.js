import React, { createContext, useReducer, useState, useEffect } from 'react'
import { GET_PRODUCTS } from '../Config/Constants'

export const StoreContext = createContext({})

const initialState = { products: [] }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return payload
    default:
      throw new Error('Action type must be defined')
  }
}

const fetchAllProducts = dispatch => {
  fetch('http://localhost:3000/products/')
    .then(response => response.json())
    .then(json => dispatch({ type: GET_PRODUCTS, payload: json }))
    .catch(error => console.log('Error fetching all products'))
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => fetchAllProducts(dispatch), [])
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store
