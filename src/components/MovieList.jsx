import React from 'react'
import MovieItem from './MovieItem'
import { v4 as uuidv4 } from 'uuid'

const MovieList = ( {movies, handleClick, hasEnoughBudget, isUserPage} ) => {
  return (
    <div className='movies-container'>
        {movies.map(movie => {
            return (
              <MovieItem 
                key={uuidv4()} 
                movie={movie} 
                handleClick={handleClick} 
                buttonType='add' 
                hasEnoughBudget={hasEnoughBudget}
                isUserPage={isUserPage}
              />
              )
        })}
    </div>
  )
}

export default MovieList
