import React, { createContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext();


const Global = ({children}) => {
  const Navigate = useNavigate();
  const [active,setActive] = useState(false);
  const [user,setUser] = useState(false);
  const handleExplore = (user) =>{
    (user)?Navigate('/dashboard'):Navigate('/login')
  }
  return (
    <GlobalContext.Provider value={{active,setActive,user,setUser,handleExplore}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Global
