import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignIn from '../../pages/signin/SignIn'
import { Home } from '../../pages/home/Home'
import SignUp from '../../pages/signup/SignUp'

export const RouteHandler = () => {
  return (
    <div>
        
    

        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="signup" element={<SignUp/>}/>
       </Routes>

    </div>
  )
}
