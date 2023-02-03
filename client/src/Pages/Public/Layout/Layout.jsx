//Utils
import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import Nav from '../../../Components/Public/Nav/Nav'
import Footer from '../../../Components/Public/Footer/Footer'

//Style
import './Layout.css'

//Function
function Layout() {
  return (
    <div className="Layout">
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout
