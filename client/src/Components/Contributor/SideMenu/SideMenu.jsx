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
          <NavLink
            to="/contributor/dashboard"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contributor/logements/add"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Ajouter un logement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contributor/logements/mylogement"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Mes logements
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
