import axios from "axios";
const baseUrl="https://note-sigma-black.vercel.app/api/v1/notes"


export async function addNoteApi({ title, content }){
    try{
        
        const {data}=await axios.post(baseUrl,{ title, content },{
            headers:{
                token:'3b8ny__'+localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
      //  console.log(data)
        return data
        
    }catch(e){
        throw(e)
    }

}



export async function GetUserNotes(){
    try{
        
        const {data}=await axios.get(baseUrl,{
            headers:{
                token:'3b8ny__'+localStorage.getItem('token'),
            }
        })
       // console.log(data)
        return data
        
    }catch(e){
      //  console.log(e)
        
throw e
    }

}

export async function DeleteUserNotes(noteID){
    try{
        
        const {data}=await axios.delete(baseUrl+'/'+noteID,{
            headers:{
                token:'3b8ny__'+localStorage.getItem('token'),
            }
        })
       // console.log(data)
        return data
        
    }catch(e){
        console.log(e)
        
        throw(e)
    }

}


export async function UpdateUserNotes({ title, content,NoteId }){
    try{
        
        const {data}=await axios.put(baseUrl+'/'+NoteId,{ title, content },{
            headers:{
                token:'3b8ny__'+localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
       // console.log(data)
        return data
        
    }catch(e){
        throw(e)
        

    }

}