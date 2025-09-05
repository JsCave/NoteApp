import React, { useEffect, useState } from 'react'
import { Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,Button,useDisclosure,Checkbox,Input,Link, } from "@heroui/react";
import { addNoteApi, UpdateUserNotes } from "../services/noteService";

      
export default function ModalComponent({isOpen,onOpenChange,typeOfOp,getUserNotes,deleteUserNotes,isLoading,setLoading,onClose,UpdateTitle,UpdateContent,NoteId}) {


  const[title,setTitle]=useState('')
  const[content,setContent] =useState('');
 
  useEffect(() => {
    if (typeOfOp === 'update') {
      setTitle(UpdateTitle || '');
      setContent(UpdateContent || '');
    } else if (typeOfOp === 'new') {
      setTitle('');
      setContent('');
    }
  }, [typeOfOp, UpdateTitle, UpdateContent]);
  

  async function handleSubmit(e){
    e.preventDefault()
    const formData=new FormData()
    if (title) formData.append("title", title)
    if (content) formData.append("content", content)
    setLoading(true)
   const response=typeOfOp=='new'?await addNoteApi({ title, content}):await UpdateUserNotes({ title, content,NoteId})
   // console.log(response)
    await getUserNotes()
    setTitle('')
    setContent('')
    onClose()
    setLoading(false)
    }

    async function deleteNote(){
      setLoading(true)
await deleteUserNotes()
await getUserNotes()
onClose()
setLoading(false)
      }


              



if(typeOfOp=='delete'){
  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ModalHeader className="flex flex-col gap-1">Delete Note</ModalHeader>
          <ModalBody>
<p>Are You Sure You Want To Delete?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              No
            </Button>
            <Button type='submit' isLoading={isLoading} color="danger" onPress={deleteNote}>
              Yes
            </Button>
            
          </ModalFooter>
          </form>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}
  return (
    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ModalHeader className="flex flex-col gap-1">{typeOfOp=='new'?<>New Note</>:<>Update Note</>}</ModalHeader>
          <ModalBody>
          
            <Input
              label="Title"
              placeholder="Title"
              variant="bordered"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              label="Note"
              placeholder="Note"
              type="text"
              variant="bordered"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button type='submit' color="primary" isLoading={isLoading}>
            {typeOfOp=='new'?<>New Note</>:<>Update Note</>}
            </Button>
            
          </ModalFooter>
          </form>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}







