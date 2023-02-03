//Utils
import React from 'react'

//Components
import SignUp from '../../../Components/Contributor/SignUp/SignUp'

//Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//Style
import './Auth.css'

//Function
function Auth() {
  return (
    <div className="AuthPage">
      <div className="LoginBloc">
        <b className="LogTitle">Connexion</b>
      </div>
      <div className="SignUpBloc">
        <b className="SUTitle">Inscription</b>
        <SignUp />
        <p>
          Vous êtes déjà inscrit ?{' '}
          <button className="BackLogin">
            Connectez-vous ! <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth
