//Utils
import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import {
  CLayout,
  CDashboard,
  Logement,
  LogementAdd,
  LogementEdit,
  UserLogement,
} from '../index'
import { Home, About } from '../../Public/index'
import Error from '../../../_Utils/Error/Error'

//Function
function CRouter() {
  return (
    <Routes>
      <Route element={<CLayout />}>
        <Route index element={<CDashboard />} />
        <Route path="dashboard" element={<CDashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logements" element={<Logement />}>
          <Route path="add" element={<LogementAdd />} />
          <Route path="mylogement" element={<UserLogement />} />
          <Route path="update/:lid" element={<LogementEdit />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default CRouter
