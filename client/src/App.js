//Utils
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Router
import PublicRouter from './Pages/Public/PublicRouter/PublicRouter'
import CRouter from './Pages/Contributor/CRouter/CRouter'

//Helpers
import AuthGuard from './_Helpers/AuthGuard'

//Function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route
          path="/contributor/*"
          element={
            <AuthGuard>
              <CRouter />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
