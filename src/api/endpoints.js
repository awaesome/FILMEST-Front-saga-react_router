import { getToken } from './api'
import axios from 'axios'

export const getMovies = () => axios.get('http://localhost:5000/movies').catch(error => error.response)

export const getMovie = (id) => {
  const options = {
    headers: {
      Authorization: `jwt ${getToken()}`
    }
  }
  return axios.get(`http://localhost:5000/movies/${id}`, options).catch(error => error.response)
}

export const userAuth = (credentials) => axios.post('http://localhost:5000/auth', credentials, {
  headers: { 'content-type': 'application/json' }
})
  .catch(error => error.response)

export const userRegistration = (credentials) => axios.post('http://localhost:5000/register', credentials, {
  headers: { 'content-type': 'application/json' }
})
  .catch(error => error.response)