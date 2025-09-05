import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@heroui/react";
export default function NoteCard ({deleteNote,updateNote,noteData,setNoteId,setUpdateTitle,setUpdateContent}) {
  return (
      <Card className="max-w-[20%]">
<CardHeader className="flex gap-3">
<i className="fa-solid fa-note-sticky  text-5xl"></i>
  <div className="flex flex-col">
    <p className="text-md">{noteData.title}</p>
  </div>
</CardHeader>
<Divider />
<CardBody>
  <p>{noteData.content}</p>
</CardBody>
<Divider />
<CardFooter className='flex justify-around'>
<Button color="danger" onPress={()=>{setNoteId(noteData._id); deleteNote();}}>Delete</Button>
<Button color="default" onPress={()=>{setNoteId(noteData._id); setUpdateTitle(noteData.title); setUpdateContent(noteData.content); updateNote();}}>Update</Button>
</CardFooter>
</Card>  
  )
}
