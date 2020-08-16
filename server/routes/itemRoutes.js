const ItemController = require('../controllers/itemController.js')
const { authentication, itemAuthorization, creatorAuth } = require('../middlewares/auth.js')

const express = require('express')
const router = express.Router()

router.get('/', ItemController.findAll)
router.get('/:id', ItemController.findOne)

router.post('/', authentication, creatorAuth, ItemController.create)
router.put('/:id', authentication, itemAuthorization, creatorAuth, ItemController.update)
router.delete('/:id', authentication, itemAuthorization, creatorAuth, ItemController.destroy)

module.exports = router
