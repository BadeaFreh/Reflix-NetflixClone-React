import React from 'react'
import User from './User'
import { v4 as uuidv4 } from 'uuid';

const AllUsers = ({users}) => {
  return (
    <div className='users-container'>
        <h3 className='header-title'>Who's Watching?</h3>
        <div className='users-boxes'>
            {users.map(user => {return <User key={uuidv4()} user={user}/>})}
        </div>
    </div>
  )
}

export default AllUsers
