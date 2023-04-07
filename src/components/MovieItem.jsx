import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ( {movie, handleClick, buttonType, isUserPage} ) => {
  
  return (
    <>
      <div className='movie-item'>
        <Link to={`${movie.id}`}>
          <img className='movie-img' src={movie.img} />
        </Link>
        {isUserPage && <button 
          className='btn movie-button' 
          onClick={() => handleClick(movie, buttonType)}
        >
          {buttonType === 'remove'? '-': '+'}</button>}
      </div>
    </>
  )
}

export default MovieItem
