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
    firstname: '',
    lastname: '',
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
        navigate('/contributor/logements')
      })
      .catch((error) => console.log(error))
  }

  return (
    <form name="SignUp" onSubmit={onSubmit} className="SignUpForm">
      <div className="InputBox">
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          aria-label="prénom"
          required={true}
          value={SUcredentials.firstname}
          onChange={onChange}
        />
      </div>

      <div className="InputBox">
        <label htmlFor="lastname">Nom de famille</label>
        <input
          type="text"
          name="lastname"
          aria-label="Nom de famille"
          required={true}
          value={SUcredentials.lastname}
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
