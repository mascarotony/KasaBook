//Utils
import React from 'react'

//Components
import { SignUp, Login } from '../../../Components/Contributor/index'

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
        <Login />
        <p>
          Pas encore inscris ?{' '}
          <button>
            Lancez-vous !<FontAwesomeIcon icon={faChevronRight} />
          </button>
        </p>
      </div>
      <div className="SignUpBloc">
        <b className="SUTitle">Inscription</b>
        <SignUp />
        <p>
          Vous êtes déjà inscrit ?{' '}
          <button>
            Connectez-vous ! <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </p>
      </div>
    </div>
  )
}

export default Auth
