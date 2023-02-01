//Utils
import React from 'react'
import { NavLink } from 'react-router-dom'

//Style
import './SideMenu.css'

//Function
function SideMenu() {
  return (
    <div className="SideMenu">
      <ul>
        <li>
          <NavLink to="/contributor/dashboard">Profil</NavLink>
        </li>
        <li>
          <NavLink to="/contributor/logements/add">Ajouter un logement</NavLink>
        </li>
        <li>
          <NavLink to="/contributor/logements/mylogement">
            Mes logements
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
