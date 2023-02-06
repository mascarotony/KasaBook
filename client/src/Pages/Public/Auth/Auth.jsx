//Utils
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

//Components
import { SignUp, Login } from '../../../Components/Contributor/index'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//Style
import './Auth.css'

//Function
function Auth() {
  const [display, setDisplay] = useState('none')
  const [isActive, setIsActive] = useState('')

  function showCard() {
    setIsActive(isActive === '' ? 'active' : '')
    setDisplay(display === 'block' ? 'none' : 'block')
  }

  return (
    <div className="AuthPage">
      <Helmet>
        <title>KasaBook | Mon Compte</title>
      </Helmet>
      <div className="LoginBloc">
        <b className="LogTitle">Connexion</b>
        <Login />
        <p>
          Pas encore inscrit ?{' '}
          <button onClick={showCard}>
            Lancez-vous !<FontAwesomeIcon icon={faChevronRight} />
          </button>
        </p>
      </div>
      <div
        className={`SignUpBloc ${isActive}`}
        style={{ display: `${display}` }}
      >
        <b className="SUTitle">Inscription</b>
        <SignUp />
        <p>
          Vous êtes déjà inscrit ?{' '}
          <button onClick={showCard}>
            Connectez-vous ! <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth
