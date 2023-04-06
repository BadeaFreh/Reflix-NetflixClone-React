import React, { useState } from 'react'
import users from '../data/data.users'
import Users from './AllUsers'

const Home = () => {
  return (
    <>
      <Users users={users}/>
    </>
  )
}

export default Home
