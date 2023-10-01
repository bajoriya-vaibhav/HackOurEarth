import React, { useContext } from 'react'
import Nav from '../components/navbar/Nav'
import './Profile.css'
import styles from '../styles/styles'
import { GlobalContext } from '../context/Global'
import Card from '../components/Card'

const Profile = () => {
  const {projectsdemo} = useContext(GlobalContext)
  return (
    <div className='bg-gradient-to-br from-bluedark from-30% via-bluelight via-70% to-bluedark m-0 profile-bg'>
      <Nav/>
      <div className="welcome">
        <div className="welcomecard w-1/4">
            <h1>Welcome Back!</h1>
            <h2>Nice to see you, Vaibhav Bajoriya!</h2>
        </div>
        <div className='w-1/2 bg-gradient-to-r from-navybluedark to-blue3 border-none rounded-3xl py-4 flex flex-col items-center justify-center'>
          <div className={`${styles.text2Xl} text-white font-bold text-center`}>Add Project to Profile</div>
          <div className={`${styles.textLg} ${styles.yPaddings}`}>Here you can add the projects info</div>
          <div className='btn btn-primary text-center justify-self-center '>Add Project</div>
        </div>
        <div className="detailscard w-1/4">
            <h1>Profile Information</h1>
            <h2>Hi, I’m Vaibhav Bajoriya, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</h2>
            <h3>Full Name: <span>Vaibhav Bajoriya</span></h3>
            <h3>Mobile: <span>123456789</span></h3>
            <h3>Email: <span>xyz@gmail.com</span></h3>
            <h3>Location: <span>India</span></h3>
        </div>
      </div>
      <div className="projects bg-gradient-to-r from-bluedark3 to-blue3 p-4 rounded-3xl">
        <div className={`${styles.textXl} text-bold text-white`}>Projects</div>
        <div className={`${styles.textXl} my-4`}>Your latest Projects</div>
        <div className='grid grid-cols-3 gap-12 items-stretch'>
          {projectsdemo.map((project)=><Card project={project}/>)}
        </div>
      </div>
    </div>
  )
}

export default Profile