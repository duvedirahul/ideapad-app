import { create } from 'zustand';
import axios from 'axios';

const noteStore = create((set) => ({
    // states
    notes: null,
    noteFormData: {
        title: '',
        body: ''
    },
    noteUpdateFormData: {
        title: '',
        body: '',
        _id: null
    },
    // functions
    fetchNotes: async () => {
        // get notes from api
        try {
            const response = await axios.get('/notes');
            const notes = response.data.notes;
            //   setNotes(notes);
            set({
                notes: notes
            })

        } catch (error) {
            console.error('Error fetching the data',error);
        }
    },
    setFormData: (e) => {
        const { name, value } = e.target;
        set((state) => {
            return {
                noteFormData: {
                    ...state.noteFormData,
                    [name]: value
                }
            }
        })
    },
    createNote: async (e) => {
        e.preventDefault();
        try {
            // get state noteFormDate
            const { noteFormData, notes } = noteStore.getState();
            // create new note
            const res = await axios.post('/notes', noteFormData);
            // clear form fields and
            // set notes with addition of new note
            set({
                noteFormData: {
                    title: '',
                    body: ''
                },
                notes: [...notes, res.data.note]
            });
        } catch (error) {
            alert('Error Creating note');
            console.log('Error creating new note', error);
        }
    },
    deleteNote: async (_id) => {
        try {
            // get notes from state
            const { notes } = noteStore.getState();
            // delete the note
            await axios.delete(`/notes/${_id}`);
            // update state
            set({
                notes: notes.filter((note) => { return note._id !== _id })
            })
        } catch (error) {
            alert('Error deleting note');
            console.log('Error deleting note', error);
        }

    },
    // toggle update form, handle onClick update button to set initial values of update form 
    toggleUpdateForm: (note) => {
        const { title, body, _id } = note;
        // set update Form data state
        set({
            noteUpdateFormData: { title, body, _id }
        })
    },
    //handle changes in update form and setupdateForm state 
    setUpdateFormData: (e) => {
        const { name, value } = e.target;
        const { noteUpdateFormData } = noteStore.getState();
        set({
            noteUpdateFormData: {
                ...noteUpdateFormData,
                [name]: value
            }
        });
    },
    updateNote: async (e) => {
        e.preventDefault();
        const { noteUpdateFormData, notes } = noteStore.getState();
        const { title, _id, body } = noteUpdateFormData;
        try {
            // update note 
            await axios.put(`/notes/${_id}`, { title: title, body: body });

            // update state
            const newNotes = [...notes];
            const noteIndex = notes.findIndex((note) => { return note._id === _id });
            newNotes[noteIndex] = noteUpdateFormData;
            // set updated notes and clear update form fields
            set({
                notes: newNotes,
                noteUpdateFormData: { title: '', body: '', _id: null }
            })

        } catch (error) {

        }
    },
    canceUpdateNote: (e) => {
        e.preventDefault();
        set({
            
            noteUpdateFormData: { title: '', body: '', _id: null }
        })
    }


}))

export default noteStore;