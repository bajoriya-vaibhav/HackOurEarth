import React from 'react'
import './FloatingNav.css'
import { Link } from 'react-router-dom'

const FloatingNav = () => {
  return (
    <div className='fl-nav-container'>
        <div className="fl-nav-heading"><h1> <Link to='/'>HackOurEarth</Link></h1></div>
        <div className='nav-list'>
            <ul>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default FloatingNav