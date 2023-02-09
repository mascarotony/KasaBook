//Utils
import { Navigate } from 'react-router-dom'
import { accountService } from '../_Services/account.service'

//Function
function AuthGuard({ children }) {
  if (!accountService.isLogged) {
    return <Navigate to="/Auth" />
  }
  return children
}

export default AuthGuard
