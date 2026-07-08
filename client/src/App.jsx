import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import axios from 'axios'



export const ServerUrl = "http://localhost:8000"

const App = () => {
 
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true})
        console.log(result.data)
        dispatch(setUserData(result.data))
        
      }
      catch(error){
        console.log(error);
        console.log(error.response);
        dispatch(setUserData(null))
      }
    }
    getUser()

  }, [dispatch])

  return (

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/auth' element={<Auth/>} ></Route>
    </Routes>
  )
}

export default App

