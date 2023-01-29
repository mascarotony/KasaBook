//Utils
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Router
import PublicRouter from './Pages/Public/PublicRouter/PublicRouter'
import AdminRouter from './Pages/Admin/AdminRouter/AdminRouter'

//Function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
