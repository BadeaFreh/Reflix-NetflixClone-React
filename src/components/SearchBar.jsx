import React from 'react'

const SearchBar = ({handleSearchChange}) => {

  return (
    <div className='search-bar-container'>
        <input type="text" placeholder='Search...' onChange={handleSearchChange} />
    </div>
  )
}

export default SearchBar
