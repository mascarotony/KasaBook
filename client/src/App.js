//Utils
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Router
import PublicRouter from './Pages/Public/PublicRouter/PublicRouter'
import CRouter from './Pages/Contributor/CRouter/CRouter'

//Function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route path="/contributor/*" element={<CRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
