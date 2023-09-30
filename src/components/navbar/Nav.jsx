import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Path, Searchbar } from './navstyles'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const Nav = () => {
  const [active,setActive] = useState(false)
  return (
    <div className='flex bg-transparent gap-10 mx-2 my-4 items-center justify-between'>
      <div className='w-1/3'><Path/></div>
      <div className='w-1/3'><Searchbar/></div>
      <div className='flex gap-4'>
        {active?<div>Hi,There</div>:<div className='flex gap-2'><AccountCircleRoundedIcon/>Sign in</div>}
        <Link to='/'><SettingsRoundedIcon/></Link>
      </div>
    </div>
  )
}

export default Nav
