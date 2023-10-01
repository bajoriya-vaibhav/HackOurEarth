import React from 'react'
import { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import FloatingNav from '../components/FloatingNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const isValidEmail = (inputValue) => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      return false;
    } else {
      return true;
    }
  }
  const checkSignUp = async (userData) => {
    if (!isValidEmail(userData.Email) || userData.password == '' || userData.Email == '' || userData.name =='') {
      alert('Please enter valid credentials');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/users/signup', userData);
      const isUsername = response.data;
  
      if (isUsername) {
        alert('Registered successfully');
        navigate('/dashboard')
      } else {
        alert('Username already taken');
      }
    } catch (error) {
      // Handle any errors that occur during the server request
      console.error('Error during sign-up:', error);
      alert(error);
    }
  }
  return (
    <div className='signup'>
      <FloatingNav/>
      <div className='signup-image'>
      </div>
      <div className='signup-text'>
            <h1>Welcome!</h1>
            <h2>Get started with your open source journey.</h2>
            <h3>Name</h3>
            <input type="text" value={name} onChange={() => { setName(event.target.value) }} placeholder='Your Fullname..' />
            <h3>Email</h3>
            <input type="text" value={email} onChange={() => { setEmail(event.target.value) }} placeholder='Your Email..'/>
            <h3>Password</h3>
            <input type="password" value={pass} onChange={() => { setPass(event.target.value) }} placeholder='Your Password..' />
        <button onClick={() => checkSignUp({
          name: name,
          Email: email,
          password: pass
        }) }>Sign Up</button>
            <h4>Already have an account? <Link to='/login'>Sign In</Link> </h4>
      </div>
    </div> 
  )
}
export default Signup
