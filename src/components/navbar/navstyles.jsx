import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import {FaMagnifyingGlass} from 'react-icons/fa6'
export const Path = () =>{
  const path = useLocation().pathname;
  return(
  <>
  <div className="text-sm breadcrumbs ">
    <ul>
      <li><Link to='/'><HomeIcon fontSize='small'/></Link> </li>
      <li><Link to={path}>{path.replace('/','')}</Link></li> 
    </ul>
  </div>
  </>
  )
}

export const Searchbar = () =>{
  return(
    <>
    <form className='flex m-0 p-0 rounded-2xl min-height min-h-0 h-12 flex items-center w-full'>
      <input type="text" placeholder="Type here..." className="input min-h-0 h-8 w-full bg-transparent" />
      <button className="btn btn-ghost btn-circle -ml-12 hover:bg-transparent hover:opacity-50"><FaMagnifyingGlass/></button>
    </form>
    </>
  )
}

const navstyles = () => {
  return (
    <div>
      
    </div>
  )
}

export default navstyles
