import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { Path, Searchbar } from './navstyles'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { navVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import styles from '../../styles/styles'
import { GlobalContext } from '../../context/Global';
import { Button } from '@mui/material';

const Nav = () => {
  const {active} = useContext(GlobalContext)
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='flex bg-transparent gap-10 mx-2 my-4 items-center justify-between font-bold text-white'>
      <div className='w-1/2'><Path/></div>
      <div className='w-1/4'><Searchbar/></div>
      <div className='flex gap-4'>
      <AccountCircleRoundedIcon/>{active?<div>Hi,There</div>:<Link to='/login' className='flex gap-2'>Sign in</Link>}
        <Link to='/'><SettingsRoundedIcon/></Link>
      </div>
    </div>
  </motion.nav>
    
  )
}

export default Nav
