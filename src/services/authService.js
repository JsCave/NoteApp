import axios from "axios";
const baseUrl="https://note-sigma-black.vercel.app/api/v1/users/"

export async function registerApi(formData){
    try{
        
        const {data}=await axios.post(baseUrl + "signUp",formData)
      //  console.log(data)
        return data
        
    }catch(e){
        throw(e)
    }

}


export async function loginApi(formData){
    try{
        
        const res=await axios.post(baseUrl + "signIn",formData)
       // console.log(res)
        return res.data
    }catch(e){
        throw(e)
//return e.response ? e.response.data.error : e.message
    }

}


    