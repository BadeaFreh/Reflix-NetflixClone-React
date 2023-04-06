import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div>
      <Link to="/">Home</Link></div>
    <div>
      <Link to="/catalog">Catalog</Link>
    </div>
    <div className='logo'>REFLIX</div>
    </>
  )
}

export default Navbar
