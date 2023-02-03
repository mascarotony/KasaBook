//Utils
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import Logo from '../../../assets/Logo.png'

//Style
import './Nav.css'

//Function
function Nav() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className={`NavBar ${showMenu ? 'showBar' : 'hiddenBar'}`}>
      <div className="Logo">
        <img src={Logo} alt="Logo KasaBook" />
      </div>
      <b className="TitleKB">KasaBook</b>
      <ul className="NavList">
        <li className="NavItem Slide1">
          <NavLink
            className={({ isActive }) => (isActive ? 'activated' : 'NavLink')}
            to="/"
            end
          >
            Accueil
          </NavLink>
        </li>
        <li className="NavItem Slide2">
          <NavLink
            className={({ isActive }) => (isActive ? 'activated' : 'NavLink')}
            to="/About"
            end
          >
            À Propos
          </NavLink>
        </li>
        <li className="NavItem Slide3">
          <NavLink
            className={({ isActive }) => (isActive ? 'activated' : 'NavLink')}
            to="/Auth"
            end
          >
            Mon Compte
          </NavLink>
        </li>
      </ul>
      <button className="NavBurger" onClick={handleShowMenu}>
        <span className="BurgerLine"></span>
      </button>
    </nav>
  )
}

export default Nav
