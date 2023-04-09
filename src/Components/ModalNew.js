import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {toast} from 'react-toastify'

export default function ModalNew({ isOpen, onClose, title: initialTitle, content: initialContent, onSave: handleSave, onNoteUpdate, note }) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    if (note) {
      setNoteTitle(note.title);
      setNoteContent(note.content);
    } else {
      setNoteTitle(initialTitle || '');
      setNoteContent(initialContent || '');
    }
  }, [note, initialTitle, initialContent]);

  // Modal.setAppElement(el)

  const handleModalSave = () => {
    if (note) {
      const updatedNote = { ...note, title: noteTitle, content: noteContent };   // This is the updated note
      onNoteUpdate(updatedNote);  // <-- the updated note is passed to the onNoteUpdate function
      handleSave(updatedNote.title, updatedNote.content);  // <-- the updated note is passed to the handleSave function
      toast.success('Note Updated Successfully')
    } else {
      handleSave({ title: noteTitle, content: noteContent });
    }
    setNoteTitle('');
    setNoteContent('');
    onClose();
  };


  const handleModalClose = () => {
    onClose();

  }

  return (
    <Modal isOpen={isOpen} onRequestClose={handleModalClose} ariaHideApp={false} className="bg-gray-900 bg-opacity-50 fixed inset-0 flex justify-center items-center">
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
    <h2 className="text-xl font-semibold mb-4">{note ? 'Edit Note' : 'New Note'}</h2>
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
        Note's
      </label>
      <textarea
        id="content"
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
    </div>
    <div className="flex justify-end">
      <button onClick={handleModalSave} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mr-3">
        Save
      </button>
      <button onClick={handleModalClose} className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500">
        Cancel
      </button>
    </div>
  </div>
</Modal>

  );
}
