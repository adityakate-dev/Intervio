import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'

export const ServerUrl = "http://localhost:8000"

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        console.log(result.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getUser()

  }, [])

  return (

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/auth' element={<Auth/>} ></Route>
    </Routes>
  )
}

export default App

