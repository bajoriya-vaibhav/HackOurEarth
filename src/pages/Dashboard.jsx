import React from 'react'
import Nav from '../components/navbar/Nav'
import styles from '../styles/styles'
import { Button } from '@mui/material'
import Footer from '../components/footer/Footer'
const Dashboard = () => {
  return (
    <div className='bg-gradient-to-br from-bluedark from-30% via-bluelight via-70% to-bluedark m-0'>
      <Nav/>
      <div className='my-4 mx-8'>
        <div className='flex items stretch h-1/4 gap-12 my-4 mx-8'>
          <div className={`p-4 border-none rounded-3xl bg-gradient-to-r from-waterdark to-waterlight w-1/2 leading-10 flex justify-between`}>
            <div>
              <div className={`${styles.textLg} leading-10`}>Welcome Back,</div>
              <div className={`${styles.text4Xl} font-bold text-white my-4`}>John Doe</div>
              <div className={`${styles.textLg}`}>Glad to see you again!</div>
              <div className={`${styles.textLg}`}>Ask me anything.</div>
              <div className={`text-sm text-white mt-16 rounded-full w-fit`}><Button >Tap to record</Button></div>
            </div>
            <img src='./img/welcome.png' className='opacity-90'></img>
          </div>
          <div className={`p-4 border-none rounded-3xl bg-gradient-to-r from-purple1 to-purple2 w-1/3 leading-loose`}>
            <div className={`${styles.text2Xl} text-white`}>Satisfaction Rate</div>
            <div className={`${styles.textLg} `}>From all projects</div>
            <img src='./img/rating.png' className='w-full h-fit'/>
          </div>
        </div>
        <div className={`${styles.paddings} my-4 mx-8 border-none rounded-3xl bg-gradient-to-r from-purple1 to-purple2`}>
          <div className='flex'>
            <div className={`${styles.text2Xl} text-white font-bold`}>Projects</div>
          </div>
        </div>
      </div>  
      <Footer/>
    </div>
  )
}

export default Dashboard