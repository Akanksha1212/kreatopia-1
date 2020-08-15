const comicController = require('../controllers/comicController.js')
const { authentication, comicAuthorization, creatorAuth } = require('../middlewares/auth.js')

const express = require('express')
const router = express.Router()

router.get('/', comicController.findAll)
router.get('/:id', comicController.findOne)
router.get('/:id', authentication, comicController.findCreatorComic)

router.post('/', authentication, creatorAuth, comicController.create)
router.put('/:id', authentication, comicAuthorization, creatorAuth, comicController.update)
router.delete('/:id', authentication, comicAuthorization, creatorAuth, comicController.destroy)

module.exports = router
