const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger('dev'))

var mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb/code_test', {
  useMongoClient: true
})

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require('./routes')(app)

app.get('*', (req, res) => {
  res.json({ backend: 'Some sort of 404 guess' })
})

const server = app.listen(3004)
console.log('Backend is running on port 3004!')