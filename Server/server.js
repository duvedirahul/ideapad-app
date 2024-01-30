// load local variables
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
// import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDB = require('./config/dbConfig');
const  {fetchNotes, fetchNoteById, createNote ,updateNote ,deleteNote } = require('./controllers/noteController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');


// app using express
const app = express();

// configure express
// by default express dont understand json so used this
app.use(express.json());
// to enable request from other origin i.e. otherthan this port
app.use(cors(
    {
        origin: true,
        credentials: true
    }
));
// enable express to use cookie as default express cant read it 
app.use(cookieParser());

// connect to database
connectToDB();

// Routing 

app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth,usersController.checkAuth);

// get all notes
app.get('/notes',requireAuth, fetchNotes );
// get the specific note
app.get('/notes/:id' ,requireAuth, fetchNoteById );
// create a new note
app.post('/notes' ,requireAuth,createNote);
// update note
app.put('/notes/:id', requireAuth,updateNote);
// delete specific note
app.delete('/notes/:id', requireAuth, deleteNote);


// Start our sever at a specific port
app.listen(process.env.PORT);