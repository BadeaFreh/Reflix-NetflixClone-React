import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
        <div className='logo'>REFLEX</div>
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/" className=''>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" className=''>Catalog</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
