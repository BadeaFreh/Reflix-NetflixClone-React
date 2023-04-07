import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user: {id, name, color}}) => {

  return (
    <div>
      <Link to={`${id}/catalog`}>
        <div className='user-box' style={{backgroundColor: color}}>
          <p className='name'>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default User
