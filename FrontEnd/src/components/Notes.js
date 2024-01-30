import noteStore from '../stores/noteStore';
import Note from './Note';
import '../styles/index.css';

function Notes() {
    // store 
    const store = noteStore();
    return (
        <>
            {
                store.notes && store.notes.map((note) => {
                    return (
                        <Note key={note._id} note={note} />
                    )
                })
            }
        </>
    )
}
export default Notes;