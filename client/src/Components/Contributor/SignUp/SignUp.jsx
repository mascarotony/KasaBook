//Utils
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Service
import { accountService } from '../../../_Services/account.service'

//Style
import './SignUp.css'

//Function
function SignUp() {
  let navigate = useNavigate()

  const [SUcredentials, setSUcredentials] = useState({
    pseudo: '',
    email: '',
    password: '',
  })

  const onChange = (e) => {
    setSUcredentials({
      ...SUcredentials,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    accountService
      .signup(SUcredentials)
      .then((res) => {
        accountService.saveToken(res.data.token)
        navigate('/contributor/dashboard')
      })
      .catch((error) => console.log(error))
  }

  return (
    <form name="SignUp" onSubmit={onSubmit} className="SignUpForm">
      <div className="InputBox">
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          aria-label="Pseudo"
          required={true}
          value={SUcredentials.pseudo}
          onChange={onChange}
        />
      </div>

      <div className="InputBox">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          aria-label="email"
          required={true}
          value={SUcredentials.email}
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
          value={SUcredentials.password}
          onChange={onChange}
        />
      </div>

      <button type="submit">Je me lance !</button>
    </form>
  )
}

export default SignUp
