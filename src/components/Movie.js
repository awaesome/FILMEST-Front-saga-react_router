import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectMovie, selectUser } from '../selectors/selectors'
import { loadMovie } from '../actions/moviesActions'
import Loader from './Loader'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px 1.2rem;
`

const Title = styled.h3`
  text-align: center;
  background-color: wheat;
  padding: 10px;
`

const Poster = styled.img`
  display: block;
  height: 300px;
`

const InfoBox = styled.article`
  display: grid;
  grid-template-columns: ${({poster}) => poster ? 'auto 1fr' : '1fr'};
`

// noinspection CssInvalidPropertyValue
const MovieDetails = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit,minmax(200px, auto))
`

const DetailInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const InfoTitle = styled.h4`
  text-align: right;
  margin: 0;
  padding: 5px;
`

const Info = styled.span`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const DescriptionInfo = styled.article`
  
`

const DescriptionTitle = styled.h4`
  display: block;
  background-color: wheat;
  text-align: center;
  margin: 20px auto;
  padding: 5px;
`
const Description = styled.p`
  
`

const infoBoxData = (movie) => {
  const { year, genres, imdb, tomatoes, directors, cast } = movie

  return [
    {
      mark: 'string',
      title: 'Year',
      value: year
    },
    {
      mark: 'array',
      title: 'Genre(s)',
      value: genres
    },
    {
      mark: 'rating',
      title: 'IMDB',
      value: {
        rating: imdb.rating,
        votes: imdb.votes
      }
    },
    {
      mark: 'rating',
      title: 'Tomatoes',
      value: {
        rating: tomatoes.viewer.rating,
        votes: tomatoes.viewer.numReviews
      }
    },
    {
      mark: 'array',
      title: 'Director(s)',
      value: directors
    },
    {
      mark: 'array',
      title: 'Cast',
      value: cast
    }
  ]
}

const Movie = ({ match, movie, user, loadMovie, history }) => {

  useEffect(() => {
    loadMovie(match.params.id)
  }, [])

  useEffect(() => {
    if (user.proposeLogin) {
      return history.push('/')
    }
  }, [user.proposeLogin])

  if (!Object.getOwnPropertyNames(movie).length) {
    return <Loader />
  }

  const { title, poster, fullplot } = movie

  return (
    <Wrapper>
      <Title  children={title} />
      <InfoBox poster={poster}>
        { poster && <Poster src={poster} alt='Poster' /> }
        <MovieDetails>
          {
            infoBoxData(movie).map(({ mark, title, value }, i) => {
              switch (mark) {
                case 'string': {
                  return <DetailInfo key={i}>
                    <InfoTitle children={title}/>
                    <Info children={value}/>
                  </DetailInfo>
                }
                case 'array': {
                  return <DetailInfo key={i}>
                    <InfoTitle children={title}/>
                    <Info>
                      {
                        value.map((item, i) => <span key={i} children={`${item};`}/>)
                      }
                    </Info>
                  </DetailInfo>
                }
                case 'rating': {
                  return <DetailInfo key={i}>
                    <InfoTitle children={title}/>
                    <Info>
                      <span children={`Rating: ${value.title}`}/>
                      <span children={`Votes: ${value.votes}`}/>
                    </Info>
                  </DetailInfo>
                }
                default:
                  return <></>
              }
            })
          }
        </MovieDetails>
      </InfoBox>
      <DescriptionInfo>
        <DescriptionTitle children='Description'/>
        <Description children={fullplot} />
      </DescriptionInfo>
    </Wrapper>
  )
}

const mapStateToProps = state => (
  {
    movie: selectMovie(state),
    user: selectUser(state)
  }
)

export default connect(mapStateToProps, { loadMovie })(Movie)
