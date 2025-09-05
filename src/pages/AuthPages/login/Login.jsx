import React, { useContext, useState } from "react";
import {Button, Input} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { loginApi } from "../../../services/authService";
import { loginSchema } from "../../../schema/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../contexts/authContext";





export default function Login() {
  const[isLoading,setIsLoading]=useState(false)
  const[errMsg,setErrMsg]=useState("")
  const navigate=useNavigate()
  const{isLoggedIn,setIsLoggedIn}=useContext(authContext)
  
  const{handleSubmit,register,formState:{errors}}=useForm({
      defaultValues:{
          email:"",
          password:"",
      },
      resolver: zodResolver(loginSchema),
      mode:"onBlur"
  })
  
     async function handleLogin(formData){
      setIsLoading(true)
        const data=await  loginApi(formData)
        setIsLoading(false)
     if(data.msg=="done"){
          localStorage.setItem('token',data.token)
          setIsLoggedIn(true)
          navigate('/')
      }else{
          setErrMsg(data.msg)
      }
  console.log(data)
  
      }
      return(
          <>
          <div className="flex items-center h-screen  text-black p-4 rounded">
          <div className="w-full inline-flex flex-col gap-5 items-center p-10 shadow-lg mx-auto  relative">
  <h1 className="font-mono text-6xl">Login</h1>
  <form className="inline-flex flex-col gap-5 items-center w-full" onSubmit={handleSubmit(handleLogin)}>
  <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} label="Email" placeholder="Email" type="email" variant="bordered"  {...register('email')}/>
  <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} label="Password" placeholder="Password" type="password" variant="bordered"  {...register('password')}/>
  
  <Button type='submit' isLoading={isLoading}  color="primary" variant="solid">Login</Button>
  {errMsg && <p className="bg-red-500 text-red-950">{errMsg}</p>}
  <Link to={"/register"}>Create Account</Link>
  </form>
          </div>
          </div>
          </>
      )
}
