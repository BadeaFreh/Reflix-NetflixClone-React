import React from 'react'
import users from '../data/data.users'
import AllUsers from './AllUsers'

const Home = () => {
  return (
    <>
      <AllUsers users={users}/>
    </>
  )
}

export default Home
