import React from 'react'

export default function SignIn() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleClick = e => {
    e.preventDefault()
    const obj = {
      email,
      password
    }
    console.log(obj)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleClick}>
        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='email'
        />
        <input
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
        />
        <button type='submit'>LOG IN</button>
      </form>
    </div>
  )
}
