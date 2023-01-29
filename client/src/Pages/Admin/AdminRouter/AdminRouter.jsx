//Utils
import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import { AdminLayout, Dashboard } from '../index'
import { User, UserAdd, UserEdit } from '../User/index'
import { Logement, LogementAdd, LogementEdit } from '../Logement/index'
import Error from '../../../_Utils/Error/Error'

//Function
function AdminRouter() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/*UserPath*/}
        <Route path="user">
          <Route path="index" element={<User />} />
          <Route path="edit/:uid" element={<UserEdit />} />
          <Route path="add" element={<UserAdd />} />
        </Route>
        {/*LogementPath*/}
        <Route path="logement">
          <Route path="index" element={<Logement />} />
          <Route path="edit/lid" element={<LogementEdit />} />
          <Route path="add" element={<LogementAdd />} />
        </Route>
        {/*ErrorPath*/}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default AdminRouter
