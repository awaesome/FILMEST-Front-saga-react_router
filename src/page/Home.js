import React, { useEffect } from 'react'
import MoviesList from '../components/MoviesList'
import { loadMovies } from '../actions/moviesActions'
import { connect } from 'react-redux'

const Home = ({ loadMovies }) => {

  useEffect(() => {
    loadMovies()
  }, [loadMovies])


  return (
    <MoviesList />
  )
}

export default connect(null, { loadMovies })(Home)