//Utils
import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import { Layout, Home, About } from '../index'
import Error from '../../../_Utils/Error/Error'

//Router
function PublicRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter
