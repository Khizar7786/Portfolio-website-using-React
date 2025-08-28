import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import AppLayout from './Pages/AppLayout'
import Myintro from './Myintro'
import Experience from './Pages/Experience'


function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element : <AppLayout/>,
      children :[
        {
          index: true,
          element: <Myintro/>
        },
        {
      path: "/myintro",
      element: <Myintro/>
    },
    {
      path: "/contact",
      element: <Contact/>
  },
    {
      path:"/about",
      element: <About/>
    },{
      path:"/experience",
      element:<Experience/>
    }
      ]
    }
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
