import React, { createContext, useReducer, useEffect } from 'react'
import { GET_PRODUCTS, SIGN_IN, GET_ALL_ORDERS } from '../Config/Constants'
import axios from 'axios'

export const StoreContext = createContext({})

const initialState = {}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: payload })
    case GET_ALL_ORDERS:
      return Object.assign({}, state, { orders: payload })
    case SIGN_IN:
      return Object.assign({}, state, { loggedIn: payload })
    default:
      throw new Error('Action type must be defined')
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getAllProducts = async () => {
      await axios
        .get('http://localhost:3000/products/')
        .then(response =>
          dispatch({ type: GET_PRODUCTS, payload: response.data })
        )
        .catch(error => console.log('Error fetching all_products'))
    }
    getAllProducts(dispatch)
  }, [])

  const submitLogin = credentials => {
    const { email, password } = credentials

    const logIn = async () => {
      await axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        mode: 'no-cors',
        data: { email, password }
      })
        .then(response => {
          if (response.data.message === 'Auth successful') {
            dispatch({
              type: SIGN_IN,
              payload: {
                message: response.data.message,
                token: response.data.token
              }
            })
          }
        })
        .catch(error => console.log('Error signing in'))
    }
    logIn()
  }

  const getAllOrders = async () => {
    if (state.loggedIn.token) {
      await axios({
        method: 'get',
        url: 'http://localhost:3000/orders/',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${state.loggedIn.token}`
        }
      })
        .then(response => {
          if (response.status === 200) {
            dispatch({ type: GET_ALL_ORDERS, payload: response.data })
          }
        })
        .catch(error => console.log('Error getting all orders', error))
    }
  }

  console.log('STORE: ', state)

  return (
    <StoreContext.Provider value={[state, dispatch, submitLogin, getAllOrders]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store
