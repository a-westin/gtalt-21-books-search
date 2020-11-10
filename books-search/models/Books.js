const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String,

});

const Books = mongoose.model("Book", BooksSchema);

module.exports = Books;