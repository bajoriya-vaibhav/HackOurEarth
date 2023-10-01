import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import FloatingNav from '../components/FloatingNav'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/Global'

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const {setActive} = useContext(GlobalContext)

  const checkLogin = async(userData)=>{
    const isValid =await axios.post('http://localhost:5000/users/login',userData)
    const check = isValid.data
    if(check === false){
      alert('Please check you password');
    }
    else if(check){
      setActive(true)
      alert('Logged in successfully');
      navigate('/dashboard');
    }
    else{
      alert('Invalid Username');
    }
  }
  
  return (
    <div className='login'>
      <FloatingNav className="fl-nav" />
      <div className='login-image'>
      </div>
      <div className='login-text'>
            <h1>Nice to See You!</h1>
            <h2>Enter your email and password to sign in.</h2>
            <h3>Username</h3>
            <input type="text" value={name} onChange={() => { setName(event.target.value) }} placeholder='Your Fullname..' />
            <h3>Password</h3>
            <input type="password" value={pass} onChange={() => { setPass(event.target.value) }} placeholder='Your Password..' />
            <button onClick={() => checkLogin({
            name: name,
            password: pass
          }) }>Login</button>
            <h4>Dont have an account?  <Link to='/signup'>Sign Up</Link> </h4>
      </div>
    </div>
  )
}

export default Login
