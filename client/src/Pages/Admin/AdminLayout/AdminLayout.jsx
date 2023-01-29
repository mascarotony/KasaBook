//Utils
import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import { AdminNav, SideMenu } from '../../../Components/Admin/index'

//Style
import './AdminLayout.css'

//Function
function AdminLayout() {
  return (
    <div className="AdminLayout">
      <AdminNav />
      <div id="admin">
        <SideMenu />
        <div id="admin_body">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
