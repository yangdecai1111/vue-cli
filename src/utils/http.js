import axios from 'axios'

const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.hao123.com' : 'http://localhost:3000/'
http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  return response.data
})

export default http
