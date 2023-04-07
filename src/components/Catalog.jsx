import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import Budget from './Budget'
import movies from '../data/data.movies'
import users from '../data/data.users'
import RentedMovies from './RentedMovies'
import { useLocation } from 'react-router-dom'

const MOVIE_COST = 45
const Catalog = () => {

  const [search, setSearch] = useState('')
  const [updatedMovies, setUpdatedMovies] = useState(movies)
  const [updatedUsers, setUpdatedUsers] = useState(users)
  const [rentedMovies, setRentedMovies] = useState([])
  const [hasEnoughBudget, setHasEnoughBudget] = useState(true)
  const [alreadyRentedMsg, setAlreadyExistedMsg] = useState(null)
  const [notEnoughBudgetMsg, setNotEnoughBudgetMsg] = useState(null)
  let searchedMovies = updatedMovies.filter(movie => movie.title.toLowerCase().includes(search))
  let searchedRentedMovies = rentedMovies.filter(movie => movie.title.toLowerCase().includes(search))

  const location = useLocation()
  const userId = location.pathname.split('/')[1]
  const isUserPage = userId.includes('user')
  
  useEffect(() => {
    const userRentedMovies = localStorage.getItem(`${userId}.rentedMovies`)
    if (userRentedMovies != null) {
      setRentedMovies(JSON.parse(userRentedMovies))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(`${userId}.rentedMovies`, JSON.stringify(rentedMovies))
  }, [rentedMovies])

  function handleSearchChange(e) {
    setSearch(e.target.value.toLowerCase())
  }

  function handleClick(movie, buttonType) {
    const userIndex = updatedUsers.findIndex(u => u.id === userId)
    setHasEnoughBudget(updatedUsers[userIndex]?.budget - MOVIE_COST > 0)

    if (buttonType === 'add') {
      if (rentedMovies.includes(movie)) {
        setAlreadyExistedMsg(<p className='msg already-exist'>This movie is already rented</p>)
        setNotEnoughBudgetMsg(null)
        return
      }

      if (!hasEnoughBudget) {
        setNotEnoughBudgetMsg(
        <p className='msg not-enough'>
          You don't have enough budget
          <br />
          <span>(you can remove some movies from above)</span>
        </p>
        )
        setAlreadyExistedMsg(null)
        return
      }

      setUpdatedMovies(prevMovies => {
        const movieIndex = prevMovies.findIndex(m => m.id === movie.id)
        prevMovies[movieIndex].isRented = true
        return prevMovies
      })

      setUpdatedUsers(prevUsers => {
        const userIndex = prevUsers.findIndex(u => u.id === userId)
        prevUsers[userIndex].budget -= MOVIE_COST
        setHasEnoughBudget(prevUsers[userIndex].budget > 45)
        return prevUsers
      })

      setRentedMovies([...rentedMovies, movie])
    }

    else if (buttonType === 'remove') {
      setUpdatedMovies(prevMovies => {
        const movieIndex = prevMovies.findIndex(m => m.id === movie.id)
        prevMovies[movieIndex].isRented = false
        return prevMovies
      })

      setUpdatedUsers(prevUsers => {
        const userIndex = prevUsers.findIndex(u => u.id === userId)
        prevUsers[userIndex].budget += MOVIE_COST
        setHasEnoughBudget(prevUsers[userIndex].budget > 45)
        return prevUsers
      })
      setNotEnoughBudgetMsg(null)
      setAlreadyExistedMsg(null)
      setRentedMovies(rentedMovies.filter(m => m.id !== movie.id))
    }
    else {
      throw new Error('button type unknown')
    }
  }

  function getUserBudget() {
    return updatedUsers.find(user => user.id === userId)?.budget
  }

  function hasRentedMovies() {
    const hasRentedMovies = updatedMovies.some(movie => movie.isRented)
    return hasRentedMovies
  }
  
  const currentBudget = getUserBudget()
  
  return (
    <div className='catalog-container'>
      <div className='search-container'>
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>

      {hasRentedMovies() && <RentedMovies rentedMovies={searchedRentedMovies} handleClick={handleClick} isUserPage={isUserPage}/>}
      {alreadyRentedMsg}
      {notEnoughBudgetMsg}
      <div className='budget-container'>
        {isUserPage && <Budget userBudget={currentBudget}/>}
      </div>
      <div className='catalog-section'>
        <p className='movie-category'>Catalog:</p>
        <MovieList 
          movies={searchedMovies} 
          handleClick={handleClick} 
          hasEnoughBudget={currentBudget > 0} 
          isUserPage={isUserPage}
        />
      </div>
    </div>
  )
}

export default Catalog
