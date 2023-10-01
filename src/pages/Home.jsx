import React from 'react'
import Nav from '../components/navbar/Nav'
import {staggerContainer, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import styles from '../styles/styles'
import About from '../components/About'
import Footer from '../components/footer/Footer';
import Button from '@mui/material/Button'
const Home = () => {
  return (
    <div className='relative bg-gradient-to-r from-waterdark to-waterlight'>
      <div >
      <img src='./img/herobg.png' className='absolute z-0 h-screen w-screen opacity-30 object-fit'/>
        <Nav className='sticky z-0 top-0'/>
        <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
          >
            <div className="flex justify-center items-center flex-col relative z-10 leading-loose">
              <motion.div
                variants={textVariant(1.1)}
                className="flex flex-row justify-center items-center"
              >
                <h2 className='text-6xl font-bold text-white leading-loose'>Welcome To HackOurEarth</h2>
              </motion.div> 
              <motion.div
                variants={textVariant(1.2)}
                className="flex flex-row justify-center items-center"
              >
                <h2 className='text-2xl font-light text-white leading-loose'>Connect and Collaborate with others</h2>
              </motion.div>
              <motion.h2 variants={textVariant(1.3)} className='text-2xl font-light text-white leading-loose'>
                <Button variant="contained">Explore More</Button>
              </motion.h2>
            </div>
          </motion.div>
        </section>
      </div>
      <About/>
      <Footer/>
    </div>

  )
}

export default Home