import React from 'react'
import { connect } from 'react-redux'
import { selectError, selectMovies } from '../selectors/selectors'
import loader from '../assets/images/loader.gif'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import { showLoginPropose } from '../actions/userActions'

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`

const Img = styled.img`
  display: block;
  margin: 0 auto;
`

const MoviesList = ({ movies, error, showLoginPropose }) => {
  if (!movies.length && !error) {
    return (
      <Img src={loader} alt="loading..." />
    )
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
