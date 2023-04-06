import React from 'react'
import User from './User'

const Users = ({users}) => {
  return (
    <>
        <h3>Who's Watching?</h3>
        <div className='users-boxes'>
            {users.map(user => {return <User user={user}/>})}
        </div>
    </>
  )
}

export default Users
