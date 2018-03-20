const postsController = require('../controllers').posts

module.exports = (app) => {
  // SMS ROUTES
  app.get('/', postsController.index)
}
