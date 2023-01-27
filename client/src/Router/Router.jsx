//Utils
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

//Pages
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Auth from '../Pages/Auth/Auth'

//Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Auth',
    element: <Auth />,
  },
])

export default router
