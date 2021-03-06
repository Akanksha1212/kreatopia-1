const UserController = require('../controllers/userController.js')
const { authentication } = require('../middlewares/auth.js')

const express = require('express')
const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/', authentication, UserController.getProfile)

module.exports = router
