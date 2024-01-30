// import mongoose
const mongoose = require('mongoose');

// schema for user model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
         index: true,
    },
    password: {
        type: String,
        required: true,
    },
    notes:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note',
    }
    ]
  });
// created schema in mongo
const User = mongoose.model('User', userSchema);

module.exports = User;