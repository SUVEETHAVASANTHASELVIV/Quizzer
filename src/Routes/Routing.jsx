import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'
import Home from '../Components/Home'

const Routing = () => {
    const [log,setLog] =useState(true);
  return (
    <Routes>
        <Route exact path='/' element = {<LoginPage setLog = {setLog}/>}/>
        {(log)&&(
        <Route path = '/home' element={<Home/>}/>
        )}
        <Route path='*' element={<LoginPage/>} />
    </Routes>
  )
}

export default Routing