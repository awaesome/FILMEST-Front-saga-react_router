import React from 'react'
import { connect } from 'react-redux'
import { selectError, selectMovies } from '../selectors/selectors'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import { showLoginPropose } from '../actions/userActions'
import Loader from './Loader'

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`

const MoviesList = ({ movies, error, showLoginPropose }) => {
  if (!movies.length && !error) {
    return <Loader />
  }

  return (
    <Section>
      {
        movies.map(movie => <MovieItem key={movie._id} movie={movie} showLoginPropose={showLoginPropose}/>)
      }
    </Section>
  )
}

const mapStateToProps = state => (
  {
    movies: selectMovies(state),
    error: selectError(state)
  }
)

export default connect(mapStateToProps, { showLoginPropose })(MoviesList)
