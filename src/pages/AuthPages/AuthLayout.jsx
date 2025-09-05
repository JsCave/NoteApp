import React from 'react'
import { Outlet } from "react-router-dom";
import note from '../../assets/note.png'
import NavBar from '../../components/NavBar';
import {Image} from "@heroui/image";
export default function AuthLayout() {
  return (
    <>
    <NavBar/>
    <div className='container grid grid-cols-1 md:grid-cols-2 text-center mx-auto'>
    <div className='border-1 rounded  flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>Note App</h1>
      <Image
      alt="Note App"
      src={note}
      width={300}
    />
    </div>
    <div className='border-1 rounded'>
      <h1 className='text-2xl font-bold'>Note App</h1>
      <div><Outlet/></div>
    </div>
    
    </div>
    </>
  )
}
