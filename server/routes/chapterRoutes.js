const chapterController = require('../controllers/chapterController.js')
const { authentication, creatorAuth } = require('../middlewares/auth.js')

const express = require('express')
const router = express.Router()

router.get('/', chapterController.findAll)
router.get('/:id', chapterController.findOne)
router.get('/:ComicId', chapterController.findComicChapter)

router.post('/', authentication, creatorAuth, chapterController.create)
router.put('/:id', authentication, creatorAuth, chapterController.update)
router.delete('/:id', authentication, creatorAuth, chapterController.destroy)

module.exports = router
