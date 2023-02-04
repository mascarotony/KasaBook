//Utils
import React from 'react'

//Style
import './Login.css'

//Function
function Login() {
  return (
    <form name="Login" method="post" onSubmit="submit" className="LoginForm">
      <input type="hidden" name="form-name" value="contact" />

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

      <button type="submit">Connexion</button>
    </form>
  )
}

export default Login
