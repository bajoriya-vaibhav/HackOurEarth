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
  const projectsdemo = [
    {'title':'Uber Open source','img':'./img/oss1.png','desc':'Uber is committed to enabling collaboration for everyone, everywhere through open source. AresDB. A GPU-powered real-time analytics'},
    {'title':'Machine learning LLM','img':'./img/oss3.png','desc':'Llama 2 — The next generation of our open source large language model, available for free for research and commercial use.'},
    {'title':'Blockchain Open source ','img':'./img/oss2.png','desc':'Ethereum is an open source blockchain based platform that is used to build Decentralized Apps.'},
  ]

  return (
    <GlobalContext.Provider value={{active,setActive,user,setUser,handleExplore,projectsdemo}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Global
