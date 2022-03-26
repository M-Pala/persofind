import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'

function Navbar() {
  return (
    <div className='navbar-container'>
            
        <div className='link-container'>
          <ul className='nav-items'>
            <li>
              <Link className='nav-item' to='/'>Home</Link>
            </li>
            <li>
              <Link className='nav-item' to='/about'>About</Link>
            </li>
            <li>
              <Link className='nav-item' to='/services'>Services</Link>
            </li>           
          </ul>
        </div>
    </div>
  )
}

export default Navbar