import React, { createContext, useState } from 'react'

const Userprofile = ({children}) => {
    const userContext=createContext()
    const [data,setData]=useState('myname');

  return (
    <div>
        <userContext.Provider value={data}>

        </userContext.Provider>
    </div>
  )
}

export default Userprofile
