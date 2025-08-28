import React from 'react'
import Footer from "./UI-Fixed/Footer"
import Navbar from "./UI-Fixed/Navbar"
import { Outlet } from 'react-router-dom'
function AppLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout