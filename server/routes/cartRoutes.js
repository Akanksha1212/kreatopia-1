const CartController = require('../controllers/cartController.js')
const { authentication, cartAuthorization } = require('../middlewares/auth.js')
const express = require('express')
const router = express.Router()

// ID param refers to ItemId
router.post('/:id', authentication, CartController.create)

// ID param refers to CartId
router.get('/:id', authentication, CartController.findOne)
router.delete('/:id', authentication, cartAuthorization, CartController.destroy)
router.put('/:id', authentication, cartAuthorization, CartController.update)

// Sends user's cart data
router.get('/user/all', authentication, cartAuthorization, CartController.showUserCarts)
router.get('/user/history', authentication, cartAuthorization, CartController.showUserCartsHistory)
router.get('/user/pending', authentication, cartAuthorization, CartController.showUserPendingCarts)

module.exports = router
