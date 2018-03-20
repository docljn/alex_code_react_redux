const postsData = require('./data/posts')
const { dbUrl } = require('../config')

const Post = require('../models/Post')

var mongoose = require('mongoose')
mongoose.connect(dbUrl, {
  useMongoClient: true
})

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

Post.deleteMany({}, (err, res) => {
  postsData.forEach((post) => {
    Post.create(post, (err, doc) => {
      console.log(`Post ${doc._id} created`)
    })   
  })
})
setTimeout(() => {
  console.log('All done')
  mongoose.disconnect()
}, 2000)






