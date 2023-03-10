//Utils
import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import { ContributorNav, SideMenu } from '../../../Components/Contributor/index'
import Footer from '../../../Components/Public/Footer/Footer'

//Style
import './CLayout.css'

//Function
function CLayout() {
  return (
    <div className="CLayout">
      <ContributorNav />
      <div id="CMain">
        <SideMenu />
        <div id="CBody">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CLayout
