import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { Path, Searchbar } from './navstyles'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { navVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import styles from '../../styles/styles'
import { GlobalContext } from '../../context/Global';
import { Button } from '@mui/material';

const Nav = () => {
  const location = useLocation();
  const {active,setActive} = useContext(GlobalContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    setActive(false);
    navigate('/login');
    navigate(0);
  }
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='flex bg-transparent mx-2 my-4 items-center justify-between font-bold text-white'>
      <div className='w-1/2'><Path/></div>
      <div className='w-1/4'><Searchbar/></div>
      <div className='flex gap-4'>
      {location.pathname==="/profile" && active?<Link to="/dashboard">Dashboard</Link>:<div></div>}
      {location.pathname==="/dashboard"?<Link to="/profile">Profile</Link>:<div></div>}
      {active?<div></div>:<Link to='/signup'>Signup</Link>}
      {active?<div>{/* Hi,There */}</div>:<Link to='/login' className='flex gap-2'>Sign in <AccountCircleRoundedIcon/></Link>}
      {active?<Link onClick={handleLogout}>Logout</Link>:<></>}
      </div>
    </div>
  </motion.nav>
  )
}

export default Nav
