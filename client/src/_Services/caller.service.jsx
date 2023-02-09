//Utils
import axios from 'axios'

//Function
const Axios = axios.create({
  baseURL: 'http://localhost:5000',
})

export default Axios
