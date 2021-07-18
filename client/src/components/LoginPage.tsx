import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios.post('/login', {
      data: {
        email: email,
        password: password,
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  return(
    <div>
    <h1>Sign in</h1>
    <form onSubmit={(event => handleSubmit(event))}>
    <input 
      type="text" 
      value={email} 
      onChange={e => setEmail(e.target.value)}
      placeholder="email"
    />
    <input 
      type="password" 
      value={password} 
      onChange={e => setPassword(e.target.value)}
      placeholder="password"
    />
    <input className='button' 
      type="submit"
      value="login"
    />
  </form>
    </div>
  )
}
export default LoginPage