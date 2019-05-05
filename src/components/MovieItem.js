import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router'
import { isLogged } from '../api/api'
import routes from '../pathes'

const Article = styled.article`
  margin: 20px 10px;
  padding: 5px 0;
  border-bottom: 1px solid wheat;
  cursor: pointer;
  transition: all .3s;
  
    &:hover {
      border-left: 6px solid lightcoral;
    }
`

const Title = styled.h4`
  position: relative;
  text-align: center;
  background-color: wheat;
  font-size: 0.8rem;
  letter-spacing: 0.3rem;
  font-weight: bolder;
  margin: 0;
  padding: 0;
`

const Tooltip = styled.span`
  background-color: cadetblue;
  color: wheat;
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
`

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  justify-items: center;
`

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
`

const RatingTitle = styled.span`
  width: 100%;
  text-align: center;
  font-weight: 600;
`

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`

const data = (movie) => {
  return [
    {
      sourse: 'IMDB',
      rating: movie.imdb.rating,
      votes: movie.imdb.votes
    },
    {
      sourse: 'Tomatoes',
      rating: movie.tomatoes.viewer.rating,
      votes: movie.tomatoes.viewer.numReviews
    },
  ]
}

const MovieItem = ({ movie, showLoginPropose }) => {
  const { _id, title } = movie

  const [tooltip, setTooltip] = useState(false)
  const [time, setTime] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const showToolTip = () => {
    setTime(setTimeout(() => setTooltip(true), 500))
  }

  const hideTooltip = () => {
    clearTimeout(time)
    setTooltip(false)
  }

  if (redirect) {
    if (isLogged()) {
      return <Redirect to={`${routes.MOVIE}/${_id}`} />
    } else {
      setRedirect(false)
      showLoginPropose()
    }
  }

  return (
    <Article onClick={() => setRedirect(true)} >
      <Title onMouseEnter={showToolTip} onMouseLeave={hideTooltip}>
        {
          title.length > 16 ? `${title.slice(0, 15)}...` : title
        }
        {
          tooltip && <Tooltip children={title}/>
        }
      </Title>
      <Info>
        {
          data(movie).map(({sourse, rating, votes}, index) => (
            <InfoBox key={index}>
              <RatingTitle children={sourse}/>
              <Rating>
                <span>Rating: </span>
                <span>{rating}</span>
              </Rating>
              <Rating>
                <span>Votes: </span>
                <span>{votes}</span>
              </Rating>
            </InfoBox>
          ))
        }
      </Info>
    </Article>
  )
}

export default MovieItem
