import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rodolfo-link-api.herokuapp.com/api'
})

export default api