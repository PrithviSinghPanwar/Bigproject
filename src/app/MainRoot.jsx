"use client"
import React, { createContext, useEffect, useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'


export let loginContext=createContext()
export default function MainRoot({children}) {

  
  let [token,setToken]=useState( localStorage.getItem('token') ?? '' )
  let obj={token,setToken}
  useEffect(()=>{
    localStorage.setItem("LOCALTOKEN",token)
  },[token])

  return (
    <loginContext.Provider value={obj}>
       <Header/>
       {children}
       <Footer/>
    </loginContext.Provider>
  )
}
