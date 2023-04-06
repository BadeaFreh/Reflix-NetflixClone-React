import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../data/data.movies'

const MovieDetail = () => {
  const {movieId} = useParams()
  console.log(movieId)
  let movie = movies.find(movie => movie.id === parseInt(movieId))
  return (
    <div className='movie-detai-container'>
      <h2 className='movie-name'>{movie.title} ({movie.year})</h2>
      <img className='movie-img detail-img' src={movie.img} />
      <p className='movie-description'>{movie.descrShort}</p>
    </div>
  )
}

export default MovieDetail
