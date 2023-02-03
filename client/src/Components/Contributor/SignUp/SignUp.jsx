//Utils
import React from 'react'

//Style
import './SignUp.css'

//Function
function SignUp() {
  return (
    <form name="SignUp" method="post" onSubmit="submit" className="SignUpForm">
      <input type="hidden" name="form-name" value="contact" />

      <div className="InputBox">
        <label for="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          aria-label="prénom"
          required="true"
        />
      </div>

      <div className="InputBox">
        <label for="lastname">Nom de famille</label>
        <input
          type="text"
          name="lastname"
          aria-label="Nom de famille"
          required="true"
        />
      </div>

      <div className="InputBox">
        <label for="email">Email</label>
        <input type="email" name="email" aria-label="email" required="true" />
      </div>

      <div className="InputBox">
        <label for="password">Mot de Passe</label>
        <input
          type="password"
          name="password"
          aria-label="mot de passe"
          required="true"
        />
      </div>

      <button type="submit">Je me lance !</button>
    </form>
  )
}

export default SignUp
