import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ( {movie} ) => {
  const [isRented, setIsRented] = useState(false)
  
  return (
    <>
      <div className='movie-item'>
        <Link to={`${movie.id}`}>
          <img className='movie-img' src={movie.img} />
        </Link>
        <button className='btn movie-button'>{isRented? '-': '+'}</button>
      </div>
    </>
  )
}

export default MovieItem
