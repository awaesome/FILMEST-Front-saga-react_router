import axios from 'axios'

export const getMovies = () => axios.get('http://localhost:5000/movies').catch(error => error.response)

export const userAuth = (credentials) => axios.post('http://localhost:5000/auth', credentials, {
  headers: { 'content-type': 'application/json' }
})
  .catch(console.log)