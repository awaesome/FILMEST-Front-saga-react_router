import React, { useEffect } from 'react'
import MoviesList from '../components/MoviesList'
import { getMovies } from '../actions/moviesActions'
import { connect } from 'react-redux'

const Home = ({ getMovies }) => {

  useEffect(() => {
    getMovies()
  }, [getMovies])


  return (
    <MoviesList />
  )
}

export default connect(null, { getMovies })(Home)