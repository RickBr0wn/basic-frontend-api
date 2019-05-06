import { GET_PRODUCTS } from '../Config/Constants'

export const getAllProducts = obj => ({
  type: GET_PRODUCTS,
  payload: obj
})
