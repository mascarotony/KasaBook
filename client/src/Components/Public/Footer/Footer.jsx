//Utils
import React from 'react'

//Assets
import LogoWhite from '../../../assets/Logo_White.png'

//Style
import './Footer.css'

//Function
function Footer() {
  return (
    <div className="footer-container">
      <img src={LogoWhite} alt="Logo de KasaBook" className="WhiteLogoImg" />
      <p className="Footertxt">
        <span className="Copyright">©</span> 2023 KasaBook. All rights reserved
      </p>
    </div>
  )
}

export default Footer
