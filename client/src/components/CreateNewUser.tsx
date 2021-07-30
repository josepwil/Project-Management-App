import { useState } from 'react'
import axios from 'axios'

const CreateNewUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // axios.post('/admins', {
    //   organization: {
    //     organizationName: organization,
    //     plan: plan
    //   },
    //   admin: {
    //     email: email,
    //     password: password,
    //     firstName: firstName,
    //     lastName: lastName,
    //   }
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

  }

  return(
    <div>
    <h1>Create New User</h1>
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
      value="Create User"
    />
  </form>
    </div>
  )
}
export default CreateNewUser;