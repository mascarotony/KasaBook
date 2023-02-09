//Service
import Axios from './caller.service'

//inscription
let signup = (SUcredentials) => {
  return Axios.post('/api/auth/signup', SUcredentials)
}

//Connection
let login = (credentials) => {
  return Axios.post('/api/auth/login', credentials)
}

//Sauvegarde du token de session
let saveToken = (token) => {
  localStorage.setItem('token', token)
}

//Suppression du token de session
let logout = () => {
  localStorage.removeItem('token')
}

//Vérification du token
let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

//Export
export const accountService = {
  signup,
  login,
  saveToken,
  logout,
  isLogged,
}
