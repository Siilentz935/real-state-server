var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controllers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create',userController.createUser)
router.get('/all',userController.getUsers)
module.exports = router;
