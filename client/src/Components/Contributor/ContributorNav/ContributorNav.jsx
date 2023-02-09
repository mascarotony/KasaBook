//Utils
import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

//Assets
import Logo from '../../../assets/Logo.png'

//Service
import { accountService } from '../../../_Services/account.service'

//Style
import './ContributorNav.css'

//Function
function ContributorNav() {
  let navigate = useNavigate()

  const logout = () => {
    accountService.logout()
    navigate('/')
  }

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
            to="/contributor/home"
          >
            Accueil
          </NavLink>
        </li>
        <li className="NavItem Slide2">
          <NavLink
            className={({ isActive }) => (isActive ? 'activated' : 'NavLink')}
            to="/contributor/logements"
          >
            Logements
          </NavLink>
        </li>
        <li className="NavItem Slide3">
          <NavLink
            className={({ isActive }) => (isActive ? 'activated' : 'NavLink')}
            to="/contributor/about"
          >
            À Propos
          </NavLink>
        </li>
        <li className="NavItem Slide4">
          <button className="NavLink" onClick={logout}>
            Déconnexion
          </button>
        </li>
      </ul>
      <button className="NavBurger" onClick={handleShowMenu}>
        <span className="BurgerLine"></span>
      </button>
    </nav>
  )
}

export default ContributorNav
