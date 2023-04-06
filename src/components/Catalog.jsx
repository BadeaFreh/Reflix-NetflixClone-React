import React from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import Budget from './Budget'
import movies from '../data/data.movies'

const Catalog = () => {
  return (
    <div>
      <div className='search-and-budget-container'>
        <SearchBar />
        <Budget />
      </div>
      
      <div className='catalog-section'>
        <p className='movie-category'>Catalog:</p>
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default Catalog
