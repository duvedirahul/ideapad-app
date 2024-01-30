import { useEffect} from 'react';
import CreateNoteForm from '../components/CreateNoteForm';
import UpdateNoteForm from '../components/UpdateNoteForm';
import Notes from '../components/Notes';
import noteStore from '../stores/noteStore';
function NotesPage() {
  // store 
  const store = noteStore();

  // fetch all notes once the app is loaded
  useEffect(() => {
    store.fetchNotes();
  }, [])

  return (
    <div className='flex flex-col w-full lg:flex-row '>
    <div className='w-[40%] mx-auto'>
      <CreateNoteForm  />
      <UpdateNoteForm />
      </div>
      <div className='flex flex-col w-[60%] mx-auto'>
    <h1 className="text-2xl p-2 font-bold text-center  text-black">List of All Notes</h1>

      <Notes/>
      </div>
      
    </div>
  );
}

export default NotesPage;