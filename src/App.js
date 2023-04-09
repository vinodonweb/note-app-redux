import './App.css';
import AllNotes from './Components/AllNotes';
import NotesForm from './Components/NotesForm';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<NotesForm />} />
      <Route path="/allnotes" element={<AllNotes />} />
     </Routes>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
