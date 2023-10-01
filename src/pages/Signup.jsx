import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import FloatingNav from '../components/FloatingNav'

const Signup = () => {
  return (
    <div className='signup'>
      <FloatingNav/>
      <div className='signup-image'>
      </div>
      <div className='signup-text'>
            <h1>Welcome!</h1>
            <h2>Get started with your open source journey.</h2>
            <h3>Name</h3>
            <input type="text" placeholder='Your Fullname..'/>
            <h3>Email</h3>
            <input type="text" placeholder='Your Email..'/>
            <h3>Password</h3>
            <input type="password" placeholder='Your Password...' />
            <button>Sign Up</button>
            <h4>Already have an account? <Link to='/login'>Sign In</Link> </h4>
      </div>
    </div> 
  )
}
export default Signup