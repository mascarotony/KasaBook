//Utils
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Service
import { accountService } from '../../../_Services/account.service'

//Style
import './Login.css'

//Function
function Login() {
  let navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    accountService
      .login(credentials)
      .then((res) => {
        accountService.saveToken(res.data.token)
        navigate('/contributor/logements')
      })
      .catch((error) => console.log(error))
  }

  return (
    <form name="Login" onSubmit={onSubmit} className="LoginForm">
      <div className="InputBox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          aria-label="email"
          required={true}
          value={credentials.email}
          onChange={onChange}
        />
      </div>

      <div className="InputBox">
        <label htmlFor="password">Mot de Passe</label>
        <input
          type="password"
          name="password"
          aria-label="mot de passe"
          required={true}
          value={credentials.password}
          onChange={onChange}
        />
      </div>

      <button type="submit">Connexion</button>
    </form>
  )
}

export default Login
