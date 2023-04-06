import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../data/data.movies'

const MovieDetail = () => {
  const {movieId} = useParams()
  let movie = movies.find(movie => movie.id === movieId)
  return (
    <>
      <h2>{movie.title} {movie.year}</h2>
      <img src={movie.img} />
      <p>{movie.descrShort}</p>
    </>
  )
}

export default MovieDetail
