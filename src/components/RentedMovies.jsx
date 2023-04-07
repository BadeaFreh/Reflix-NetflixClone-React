import React from 'react'
import MovieItem from './MovieItem'
import { v4 as uuidv4 } from 'uuid'

const RentedMovies = ({rentedMovies, handleClick, hasEnoughBudget, isUserPage}) => {
  return (
    <>
      <p className='movie-category'>Rented:</p>
      <div className='movies-container'>
        {rentedMovies.map(movie => {
              return (
                <MovieItem 
                  key={uuidv4()}
                  movie={movie} 
                  handleClick={handleClick} 
                  buttonType='remove'
                  hasEnoughBudget={hasEnoughBudget}
                  isUserPage={isUserPage}
                  />)
          })}
      </div>
    </>
  )
}

export default RentedMovies
