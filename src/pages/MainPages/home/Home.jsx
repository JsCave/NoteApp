import React, { useEffect, useState } from 'react'
import { Button,useDisclosure} from "@heroui/react";
import ModalComponent from '../../../components/ModalComponent';
import { DeleteUserNotes, GetUserNotes, UpdateUserNotes } from '../../../services/noteService';
import Loading from '../../../components/Loading';
import  '../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import  '../../../../node_modules/@fortawesome/fontawesome-free/js/all'
import NoteCard from '../../../components/NoteCard';


export default function Home() {
  const {isOpen, onOpen, onOpenChange,onClose} = useDisclosure();
  const[typeOfOp,setTypeOfOp]=useState('')
  const [isLoading,setLoading]=useState(false)
  const [InitLoading,setInitLoading]=useState(false)
  const [notes,setNotes]=useState([])
  const [NoteId,setNoteId]=useState()
  const [UpdateTitle,setUpdateTitle]=useState('')
  const [UpdateContent,setUpdateContent]=useState('')

function addNew(){
  setTypeOfOp('new')
  onOpen()
}
function deleteNote(){
  setTypeOfOp('delete')
  onOpen()
}
function updateNote(){
  setTypeOfOp('update')
  onOpen()
}

  async function getUserNotes(){
    setInitLoading(true)
    const response=await GetUserNotes()
    .then((res)=>setNotes(res.notes))
    .catch((e)=>{if(e.response.data.msg=='not notes found'){setNotes([]);setInitLoading(false)}})
    .finally(()=>setInitLoading(false))
    }

    async function deleteUserNotes(){
      setLoading(true)
      const response=await DeleteUserNotes(NoteId)
//console.log(response)
  setLoading(false)
      
      }




    useEffect(()=>{
      getUserNotes()
    },[])


  return (
    <>
    <div className='text-center my-3'>
      <Button color="primary" onPress={addNew}>Add Note</Button>
    {/*<Button color="primary" onPress={updateNote}>Update Note</Button>*/}
      <ModalComponent 
      isOpen={isOpen} 
      onOpen={onOpen}
      onOpenChange={onOpenChange}
      typeOfOp={typeOfOp}
      getUserNotes={getUserNotes}
      deleteUserNotes={deleteUserNotes}
      isLoading={isLoading}
      setLoading={setLoading}
      onClose={onClose}
      UpdateTitle={UpdateTitle}
      UpdateContent={UpdateContent}
      NoteId={NoteId}
      />
    </div>

{InitLoading&&notes.length==0?<Loading/>
  :
  <div className='container mx-auto flex flex-wrap gap-4 justify-center'>
{notes?.map((note)=>
<NoteCard key={note._id} deleteNote={deleteNote} updateNote={updateNote} noteData={note} setNoteId={setNoteId} setUpdateTitle={setUpdateTitle} setUpdateContent={setUpdateContent}/>
)}



    </div>}
    </>
  )
}













