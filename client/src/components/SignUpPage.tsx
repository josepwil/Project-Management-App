import { useState } from 'react'
import axios from 'axios'

const SignUpPage = () => {
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [plan, setPlan] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios.post('/admins', {
      organization: {
        organizationName: organization,
        plan: plan
      },
      admin: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
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
    <h1>Sign up</h1>
    <form onSubmit={(event => handleSubmit(event))}>
    <input 
      type="text" 
      value={organization} 
      onChange={e => setOrganization(e.target.value)}
      placeholder="organization"
    />
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
    <input 
      type="text" 
      value={firstName} 
      onChange={e => setFirstName(e.target.value)}
      placeholder="first name"
    />    
    <input 
      type="text" 
      value={lastName} 
      onChange={e => setLastName(e.target.value)}
      placeholder="last name"
    />    
    <select value={plan} onChange={e => setPlan(e.target.value)}>
        <option value="free">Free</option>
        <option value="paid">Paid</option>
    </select>
    <input className='button' 
      type="submit"
      value="register"
    />
  </form>
    </div>
  )
}
export default SignUpPage