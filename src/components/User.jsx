import React from 'react'
import {Link} from 'react-router-dom'
import users from '../data/data.users';

const User = ({user: {id, name, color}}) => {
  return (
    <div>
      <Link to="/catalog">
        <div className='user-box' style={{backgroundColor: color}}>
          <p className='name'>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default User
