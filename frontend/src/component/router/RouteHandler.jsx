import React from 'react'
import { Routes, Route } from "react-router-dom"
import SignIn from '../../pages/signin/SignIn'
import { Home } from '../../pages/home/Home'
import SignUp from '../../pages/signup/SignUp'
import DashBoard from '../DashBoard/DashBoard'
import HomeWeb from '../../pages/WebSite/HomeWeb'

export const RouteHandler = () => {
  return (
    <div>
        
    

        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="dashboard/*" element={<DashBoard/>}/>
            <Route path="signup" element={<SignUp/>}/>
       </Routes>

    </div>
  )
}
