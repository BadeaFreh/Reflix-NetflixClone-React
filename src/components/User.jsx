import React from 'react'
import {Link} from 'react-router-dom'

const User = ({user: {name, color}}) => {
  return (
    <Link to="/catalog">
    <div className='user-box' style={{backgroundColor: color}}>
        <span>{name}</span>
    </div>
    </Link>
  )
}

export default User
