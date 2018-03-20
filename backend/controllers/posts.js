const Post = require('../db/models/Post')

module.exports = {

  index: (req, res) => {
    Post.find({}, (err, response) => {
      if (err) res.status(400).json(err)
      res.json(response)
    })
  },

}
