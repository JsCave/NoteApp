import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './pages/AuthPages/AuthLayout';
import Login from './pages/AuthPages/login/Login'
import Register from './pages/AuthPages/register/Register'
import MainLayout from './pages/MainPages/MainLayout'
import Home from './pages/MainPages/home/Home'
import ProtectedAuthRoute from './protectedRoutes/ProtectedAuthRoute'
import ProtectedRoute from './protectedRoutes/ProtectedRoute'
const route=createBrowserRouter([
  {path:'',element:<AuthLayout/> ,children:[
    {path:'login',element:<ProtectedAuthRoute><Login/></ProtectedAuthRoute>},
    {path:'register',element:<ProtectedAuthRoute><Register/></ProtectedAuthRoute>},
  ]},
  {path:'',element:<MainLayout/> ,children:[
    {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
  ]},
])
function App() {


  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
