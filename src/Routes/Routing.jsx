import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'
import Home from '../Components/Home'
import Quiz from '../Components/Quiz'

const Routing = () => {
    const [log,setLog] =useState(false);
    const [apiData,setApiData] = useState({
      username:"",
      category:0,
      noQuestion:0,
      difficulty:"easy"
    })
  return (
    <Routes>
       <Route exact path='/' element={<LoginPage setLog={setLog} />} />

        {(log)&&(
          <>
          <Route path = '/home' element={<Home apiData = {apiData} setApiData={setApiData}/>}/>
          <Route path = '/quizz' element={<Quiz apiData={apiData}/>}/>
        </>
        )}
        <Route path='*' element={<LoginPage/>} />
    </Routes>
  )
}

export default Routing