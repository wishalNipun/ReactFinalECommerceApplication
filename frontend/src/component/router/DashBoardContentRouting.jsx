import React from 'react'
import { Routes, Route } from "react-router-dom"

import { ItemForm } from '../DashBoardContent/ItemForm'
import { CustomerForm } from '../DashBoardContent/CustomerForm'

export const DashBoardContentRouting = () => {
  return (
    <div>

        <Routes>
            <Route path="itemForm" element={<ItemForm/>}/>
            <Route path="customerForm" element={<CustomerForm/>}/>
       </Routes>

    </div>
  )
}
