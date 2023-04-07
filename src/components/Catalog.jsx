import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import SearchBar from './SearchBar'
import Budget from './Budget'
import DUMMY_MOVIES from '../data/data.movies'
import DUMMY_USERS from '../data/data.users'
import RentedMovies from './RentedMovies'
import { useLocation } from 'react-router-dom'
import ErrorModal from './ErrorModal'
const MOVIE_COST = 30

const Catalog = () => {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState(DUMMY_MOVIES)
  const [users, setUsers] = useState(DUMMY_USERS)
  const [rentedMovies, setRentedMovies] = useState([])
  const [error, setError] = useState()

  let searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(search))
  let searchedRentedMovies = rentedMovies.filter(movie => movie.title.toLowerCase().includes(search))
  const location = useLocation()
  const userId = location.pathname.split('/')[1]
  const isUserPage = location.pathname.split('/').length > 2
  const userIndex = users.findIndex(u => u.id === userId)

  useEffect(() => {
    const storedData = localStorage.getItem(`${userId}.rentedMovies`)
    if (storedData != null) {
      const {storedRentedMovies, storedUsers} = JSON.parse(storedData)
      setRentedMovies(storedRentedMovies)
      setUsers(storedUsers)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(`${userId}.rentedMovies`, JSON.stringify({
      storedRentedMovies: rentedMovies,
      storedUsers: users
    }))
  }, [rentedMovies, users])

  function handleSearchChange(e) {
    setSearch(e.target.value.toLowerCase())
  }

  function handleClick(movie, buttonType) {
    switch (buttonType) {
      case 'add':
        handleAddMovie(movie)
        break;
      case 'remove':
        handleRemoveMovie(movie)
        break
      default:
        throw new Error('Button Type Undefined')
    }
  }

  function handleAddMovie(movie) {
    const isRented = rentedMovies.find(m => m.id === movie.id)
      if (isRented) {
        setError({
          title: 'Already Rented', 
          message: `You already picked this movie.`
        })
        return
      }
      if (users[userIndex]?.budget < MOVIE_COST) {
        setError({
          title: 'Insufficient Budget',
          message: `Sorry ${getUserName()}, but you can try to remove some movies from the rented list.`
        })
        return
      }
      setMovies(prevMovies => {
        const movieIndex = prevMovies.findIndex(m => m.id === movie.id)
        prevMovies[movieIndex].isRented = true
        return prevMovies
      })

      setUsers(prevUsers => {
        const userIndex = prevUsers.findIndex(u => u.id === userId)
        prevUsers[userIndex].budget -= MOVIE_COST
        return prevUsers
      })

      setRentedMovies(prevRentedMovies => {
        return [...prevRentedMovies, movie]
      })
  }

  function handleRemoveMovie(movie) {
    setMovies(prevMovies => {
      const movieIndex = prevMovies.findIndex(m => m.id === movie.id)
      prevMovies[movieIndex].isRented = false
      return prevMovies
    })

    setUsers(prevUsers => {
      const userIndex = prevUsers.findIndex(u => u.id === userId)
      prevUsers[userIndex].budget += MOVIE_COST
      return prevUsers
    })
    setError(null)
    setRentedMovies(rentedMovies.filter(m => m.id !== movie.id))
  }

  function getUserName() {
    if (isUserPage){
      const foundUser = users.find(user => user.id === userId)
      return foundUser.name
    }
  }

  function getUserBudget() {
    return users.find(user => user.id === userId)?.budget
  }

  function errorHandler() {
    setError(null)
  }

  const currentBudget = getUserBudget()
  return (
    <div className='catalog-container'>
      {/* {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />} */}
      {isUserPage && <p className='user-welcome'>Welcome, {getUserName()}!</p>}
      <div className='search-container'>
        <SearchBar handleSearchChange={handleSearchChange} />
      </div>
      <div className='budget-container'>
        {isUserPage && <Budget userBudget={currentBudget}/>}
      </div>
      {<RentedMovies rentedMovies={searchedRentedMovies} handleClick={handleClick} isUserPage={isUserPage}/>}
      {/* {error} */}
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <div className='catalog-section'>
        <p className='movie-category'>Catalog:</p>
        <MovieList 
          movies={searchedMovies}
          handleClick={handleClick} 
          hasEnoughBudget={currentBudget > MOVIE_COST}
          isUserPage={isUserPage}
        />
      </div>
    </div>
  )
}

export default Catalog
