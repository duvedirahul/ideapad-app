// import dependecies
const Note = require('../models/note');

const fetchNotes = async (req, res) => {
    try {
      // Find all notes
      const notes = await Note.find({user: req.user._id});
  
      // Respond with all notes
      res.status(200).json({ notes: notes });
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
  const fetchNoteById = async (req, res) => {
    try {
      // Get the id from the URL
      const noteId = req.params.id;
  
      // Find a note by its ID
      const note = await Note.findOne({_id : noteId, user : req.user._id});
  
      if (!note) {
        // If the note with the given ID is not found, return a 404 status
        res.status(404).json({ error: 'Note not found' });
      } else {
        // Respond with the found note
        res.status(200).json({ note: note });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

const createNote = async (req, res) => {
    try {
      // Get the data from the request body
      const { title, body } = req.body;
  
      // Validate input data
      if (!title || !body) {
        return res.status(400).json({ error: 'Title and body are required fields' });
      }
  
      // Create a new note
      const note = await Note.create({
        title: title,
        body: body,
        user: req.user._id,
      });
  
      // Fetch the created note
      const createdNote = await Note.findById(note._id);
  
      // Respond with the created note
      res.json({ note: createdNote });
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
const updateNote = async (req, res) => {
    try {
      // Get the id from the URL
      const noteId = req.params.id;
  
      // Get new fields from the request body
      const { title, body } = req.body;
  
      // Validate input data
      if (!title || !body) {
        return res.status(400).json({ error: 'Title and body are required fields' });
      }
  
      // Update the note with a specific id
      const updateResult = await Note.findOneAndUpdate({_id: noteId, user: req.user._id }, {
        title: title,
        body: body,
      });
  
      if (!updateResult) {
        return res.status(404).json({ error: 'Note not found' });
      }
  
      // Find the updated note
      const updatedNote = await Note.findById(noteId);
  
      // Respond with the updated note
      res.json({ note: updatedNote });
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
const deleteNote = async (req, res) => {
    try {
      // Get the id from the URL
      const noteId = req.params.id;
  
      // Delete the note with the specific id
      const deletionResult = await Note.deleteOne({ _id: noteId, user: req.user._id });
  
      if (deletionResult.deletedCount === 1) {
        // Note was successfully deleted
        return res.json({Success:"Record Deleted"});
      } else {
        return res.json({Failed:"Note not found"});
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  

module.exports  = {fetchNotes, fetchNoteById, createNote ,updateNote ,deleteNote };