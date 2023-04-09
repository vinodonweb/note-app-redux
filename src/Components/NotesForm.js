import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../Redux/Action';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify'

export default function NotesForm() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
    toast.success('Note added successfully')
    // alert('Note added successfully')
    navigate('/allnotes')

  }

  return (
    <div>
      <h1 className='text-2xl font-bold mt-8'>React Redux Notes App
        <button type="button" className=" float-right uppercase ml-8 text-black hover:text-white bg-transparant border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
          <Link to="/allnotes">all notes</Link>
        </button>
      </h1>
      <form className="max-w-md mx-auto mt-8 shadow-lg rounded-md p-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="text-xl font-medium">Title of the note</label>
          <input id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} required placeholder="Enter Title" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="text-xl font-medium">Enter Notes Content</label>
          <textarea id="content" name="content" onChange={(e) => setContent(e.target.value)} value={content} placeholder="Enter Note" cols="45" rows="10" required className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" className="uppercase mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add note
        </button>
      </form>

      <footer>
        <p className="border-t border-grey-400 uppercase text-center text-black font-bold text-xs mt-12">made with ❤️ by <a href='https://vinods-portfolio.netlify.app/' target='_blank'>Vinod Sharma</a></p>
      </footer>


    </div>
  )
}
