const mongoose = require('mongoose');
//If we want to do new Schema instead use:
// const { Schema } = mongoose;

//Define the schema
const BookSchema = new mongoose.Schema({
  _id: String,
  title: {
    type: String,
    // required: true
  },
  author: {
    type: String,
    required: true
  },
  prom: {
    type: Boolean,
    // required: true
  },
  reminders: {
    type: Number,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
},
{ timestamps: true },
);

//Model
const Book = mongoose.model('books', BookSchema);

module.exports = Book;