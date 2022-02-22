const mongoose = require('mongoose');
//If we want to do new Schema instead use:
// const { Schema } = mongoose;

//Define the schema
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  prom: {
    type: String,
    required: true
  },
  reminders: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//Model
const Book = mongoose.model('books', BookSchema);

module.exports = Book;