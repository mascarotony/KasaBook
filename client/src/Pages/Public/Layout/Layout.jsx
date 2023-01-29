//Utils
import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import Nav from '../../../Components/Public/Nav/Nav'

//Style
import './Layout.css'

//Function
function Layout() {
  return (
    <div className="Layout">
      <Nav />

      <Outlet />
    </div>
  )
}

export default Layout
