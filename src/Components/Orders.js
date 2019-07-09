import React from 'react'
import { StoreContext } from '../Config/Store'
import { withRouter } from 'react-router-dom'
import { GET_ALL_ORDERS } from '../Config/Constants'
import axios from 'axios'
import LineItem from './LineItem'

const Orders = ({ history }) => {
  const { state, dispatch } = React.useContext(StoreContext)

  React.useEffect(() => {
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
    if (!state.orders) {
      getAllOrders()
    }
  }, [dispatch, state.loggedIn.token, state.orders])

  if (!state.loggedIn) {
    history.push('/sign-in/')
  }

  return (
    <div>
      <h1>The Orders Page</h1>
      {state.orders &&
        state.orders.orders.map(order => (
          <LineItem key={order._id} item={order} />
        ))}
    </div>
  )
}

export default withRouter(Orders)
