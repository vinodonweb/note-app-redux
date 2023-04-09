import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote, editNote } from '../Redux/Action';
import ModalNew from './ModalNew';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AllNotes() {
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false)
  const [noteIndex, setNoteIndex] = useState(null)

  const handleNoteEdit = (index) => {
    setNoteIndex(index)
    setShowModal(true)
  }

  const handleSave = (title, content) => {
    dispatch(editNote({
      title,
      content,
      index: noteIndex,
    }))
    // console.log(title, content)
    setNoteIndex(null)
    setShowModal(false)
    // toast.success('Note Updated Successfully')
  }
  
  function removeNoteHandler(index){
    dispatch(removeNote(index))
    toast.error('note deleted successfully')
  }

  return (
    <>
      <div className="flex flex-col items-center">
  <h3 className="text-center text-2xl mt-8 font-bold">All Notes</h3>
  <button type="button" className="inline-flex items-center px-5 py-2.5 mt-4 ml-8 text-sm font-medium text-black bg-transparent border border-yellow-400 rounded-lg hover:text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-50 dark:focus:ring-blue-700/55">
    <Link to="/">Add Note</Link>
  </button>
</div>

<div className="flex flex-wrap justify-center gap-4">
  {notes.map((note, index) => (
    <div className="w-80 p-6 bg-white rounded-lg shadow-lg mt-8" key={index}>
      <div className="font-bold text-xl mb-2">{note.title}</div>
      <p className="text-gray-700 text-base">{note.content}</p>
      <div className="flex justify-end mt-4">
        <button onClick={() => removeNoteHandler(index)} className="px-4 py-2 mr-2 font-semibold text-red-700 border border-red-500 rounded-md hover:text-white hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300">Delete Note</button>
        <button onClick={() => handleNoteEdit(index)} className="px-4 py-2 font-semibold text-blue-700 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">Edit Note</button>
      </div>
    </div>
  ))}
</div>
      <ModalNew isOpen={showModal} onSave={handleSave} onClose={() => setShowModal(false)} onNoteUpdate={handleSave} note={notes[noteIndex]} title={notes[noteIndex]?.title} content={notes[noteIndex]?.content} />
    </>
  )
}
