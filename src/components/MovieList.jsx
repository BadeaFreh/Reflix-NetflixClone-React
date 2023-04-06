import React from 'react'
import MovieItem from './MovieItem'
import { v4 as uuidv4 } from 'uuid';

const MovieList = ( {movies} ) => {
  return (
    <div className='movies-container'>
        {movies.map(movie => {
            return (<MovieItem key={uuidv4()} movie={movie}/>)
        })}
    </div>
  )
}

export default MovieList