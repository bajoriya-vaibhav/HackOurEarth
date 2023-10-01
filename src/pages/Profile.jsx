import React from 'react'
import Nav from '../components/navbar/Nav'
import './Profile.css'

const Profile = () => {
  return (
    <div className='bg-gradient-to-br from-bluedark from-30% via-bluelight via-70% to-bluedark m-0 profile-bg'>
      <Nav/>
      <div className="welcome">
        <div className="welcomecard">
            <h1>Welcome Back!</h1>
            <h2>Nice to see you, Mark Johnson!</h2>
        </div>
        <div className="detailscard">
            <h1>Profile Information</h1>
            <h2>Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</h2>
            <h3>Full Name: <span>Mark Johnson</span></h3>
            <h3>Mobile: <span>237468798</span></h3>
            <h3>Email: <span>Mark Johnson</span></h3>
            <h3>Location: <span>Unites States</span></h3>
        </div>
      </div>
      <div className="projects">
        <h1>Projects</h1>
      </div>
    </div>
  )
}

export default Profile