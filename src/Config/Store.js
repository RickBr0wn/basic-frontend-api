import React, { createContext, useReducer, useEffect } from 'react'
import {
  GET_PRODUCTS,
  SIGN_IN,
  GET_ALL_ORDERS,
  SAVE_TOKEN
} from '../Config/Constants'
import axios from 'axios'

export const StoreContext = createContext({})

const initialState = {
  loggedIn: {
    message: 'Not logged in!',
    token: null
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: payload })
    case GET_ALL_ORDERS:
      return Object.assign({}, state, { orders: payload })
    case SIGN_IN:
      return Object.assign({}, state, { loggedIn: payload })
    case SAVE_TOKEN:
      const loggedIn = { message: 'Logged in via localstorage', token: payload }
      return Object.assign({}, state, { loggedIn })
    default:
      throw new Error('Action type must be defined')
  }
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const localStorageToken = localStorage.getItem('token') || ''

  useEffect(() => {
    const getAllProducts = async () => {
      await axios
        .get('http://localhost:3000/products/')
        .then(response =>
          dispatch({ type: GET_PRODUCTS, payload: response.data })
        )
        .catch(error => console.log('Error fetching all_products'))
    }
    getAllProducts()
  }, [])

  useEffect(() => {
    console.log('localstorage: ', localStorageToken)
    localStorageToken &&
      dispatch({ type: SAVE_TOKEN, payload: localStorageToken })
  }, [localStorageToken])

  const submitLogin = (history, { email, password }) => {
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
            localStorage.setItem('token', response.data.token)
            history.push('/products/')
          }
        })
        .catch(error => console.log('Error signing in'))
    }
    logIn()
  }

  console.log('STORE: ', state)

  return (
    <StoreContext.Provider value={{ state, dispatch, submitLogin }}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store
