import React from 'react'
import axios from 'axios'
import { StoreContext } from '../Config/Store'
import { StyledContainer } from '../StyledComponents/StyledContainer'
import { StyledTextInput } from '../StyledComponents/StyledTextInput'
import { Button } from 'simple-react-toolkit'

/**
 @route   POST /products/
 @desc    Post a new product
 @access  Public
 @header  { Content-Type: application/json, Authorization: Bearer + whitespace + jwt token }
 @body    form-data - { name: String, price: Number, productImage: file }
*/

const AddProduct = () => {
  const { state } = React.useContext(StoreContext)

  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')

  const addNewProduct = async newProduct => {
    const obj = {
      method: 'post',
      url: 'http://localhost:3000/products/',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${state.loggedIn.token}`
      },
      data: newProduct
    }
    console.log(obj)
    await axios(obj)
      .then(response => console.log(response))
      .catch(error => console.log('the', error))
  }

  return (
    <StyledContainer>
      <h1>The Add Product Page</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          addNewProduct({ name, price })
        }}>
        <StyledTextInput
          inputColor={'#4186F4'}
          inputWidth={'300px'}
          placeholder={'product name'}
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <StyledTextInput
          inputColor={'#4186F4'}
          inputWidth={'300px'}
          placeholder={'product name'}
          onChange={e => setPrice(e.target.value)}
          value={price}
          required
        />
        <Button type='submit'>Submit</Button>
      </form>
    </StyledContainer>
  )
}

export default AddProduct
