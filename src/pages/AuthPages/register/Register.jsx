import React, { useState } from "react";
import {Button, Input} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod"


import { registerSchema } from "../../../schema/registerSchema";
import { registerApi } from "../../../services/authService";
import { Link } from "react-router-dom";

export default function Register() {
  const[isLoading,setIsLoading]=useState(false)
const[errMsg,setErrMsg]=useState("")
const[successMsg,setSuccessMsg]=useState("")

const{handleSubmit,register,formState:{errors}}=useForm({
    defaultValues:{
        name:"",
        email:"",
        password:"",
        age:"",
        phone:"",
    },
    resolver: zodResolver(registerSchema),
    mode:"onBlur"
})

   async function handleRegister(formData){
    setIsLoading(true)
      const data=await  registerApi(formData)
      .then((res)=>{console.log(res);setErrMsg("");setSuccessMsg('You Created Account Succesfully')})
      .catch((e)=>{setSuccessMsg('');setErrMsg(e.response.data.msg)} )
      .finally(()=>{setIsLoading(false)})
      


    }

  return (
    <>
    <div className="flex items-center h-full  text-black p-4 rounded">
    <div className="w-full inline-flex flex-col gap-5 items-center p-10 shadow-lg mx-auto relative">
<h1 className="font-mono text-6xl">Register</h1>
<form className="w-full inline-flex flex-col gap-5 items-center" onSubmit={handleSubmit(handleRegister)}>
<Input isInvalid={Boolean(errors.name?.message)} errorMessage={errors.name?.message} label="UserName" placeholder="UserName" type="name" variant="bordered" {...register('name')}/>
<Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} label="Email" placeholder="Email" type="email" variant="bordered"  {...register('email')}/>
<Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} label="Password" placeholder="Password" type="password" variant="bordered"  {...register('password')}/>
<Input isInvalid={Boolean(errors.age?.message)} errorMessage={errors.age?.message} label="Age" placeholder="Age" type="number" variant="bordered" {...register('age')}/>
<Input isInvalid={Boolean(errors.phone?.message)} errorMessage={errors.phone?.message} label="Phone" placeholder="Phone" type="phone" variant="bordered" {...register('phone')}/>

<Button 
//className="border-1 bg-amber-100 text-2xl p-3 rounded" 
type='submit'
 isLoading={isLoading}  
 color="primary" 
 variant="solid"
 //spinner={<span className="text-red-600 animate-spin">⏳</span>}
 >Register</Button>
 <Link to='/login' className="text-2xl">Have Account? Sign In</Link>
<p className="w-full bg-red-300 text-red-950">{errMsg}</p>
<p className="w-full bg-green-300 text-green-950">{successMsg}</p>
</form>
    </div>
    </div>
    </>
  )
}
