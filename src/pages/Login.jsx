import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Login = () => {
  return (
    <div className='login'>
      <div className='login-image'>
      </div>
      <div className='login-text'>
            <h1>Nice to See You!</h1>
            <h2>Enter your email and password to sign in.</h2>
            <h3>Email</h3>
            <input type="text" placeholder='Email..'/>
            <h3>Password</h3>
            <input type="password" placeholder='Password...' />
            <button>Sign In</button>
            <h4>Dont have an account?  <Link to='/signup'>Sign Up</Link> </h4>
      </div>
    </div>
  )
}

export default Login