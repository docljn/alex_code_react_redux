const mongoose = require('mongoose') 
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  user: String,
})

const Post = mongoose.model('Post', PostSchema, 'posts')

module.exports = Post