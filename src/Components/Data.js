import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../Config/Store'

export default function Data() {
  const [state, dispatch] = useContext(StoreContext)
  console.log('STATE: ', state)
  return (
    <>
      App
      <ul>
        {state.products &&
          state.products.map((product, index) => {
            const image = `http://localhost:3000/${product.productImage}`
            return (
              <li key={index}>
                <div>
                  <p>{product.name}</p>
                  <img src={image} alt={index} style={{ height: '100px' }} />
                </div>
              </li>
            )
          })}
      </ul>
    </>
  )
}
