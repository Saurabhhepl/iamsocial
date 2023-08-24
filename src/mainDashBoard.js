import Login from './pages/login/Login'
import Register from './pages/register/Register';

import { Route, Routes } from 'react-router-dom';

import React from 'react'

export default function mainDashBoard() {
  return (
   <Routes>
     <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
   </Routes>
  )
}
