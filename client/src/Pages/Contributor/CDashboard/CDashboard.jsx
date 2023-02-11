//Utils
import React from 'react'

//Style
import './CDashboard.css'

//Function
function CDashboard() {
  return (
    <div className="CDashboard">
      <b className="Title">Bonjour *Pseudo*</b>
      <div className="UserDash">
        <div className="UserPic">
          <div className="UserImg"></div>
          <button>Changer de photo de profil</button>
        </div>
        <div className="UserInfo">
          <div className="UserDesc"></div>
          <div className="UserDescButton">
            <button>Modifier mon profil</button>
            <button>Supprimer mon profil</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CDashboard
