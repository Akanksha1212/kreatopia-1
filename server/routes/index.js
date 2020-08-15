const express = require('express')
const router  = express.Router()

const userRoutes = require('./userRoutes.js')
const itemRoutes = require('./itemRoutes.js')
const cartRoutes = require('./cartRoutes.js')
const comicRoutes = require('./comicRoutes.js')
const chapterRoutes = require('./chapterRoutes.js')

router.get('/', function(req, res, next) {
    res.status(200).json({
        message: 'You are connected to the server.'
    })
})

router.use('/user', userRoutes)
router.use('/item', itemRoutes)
router.use('/cart', cartRoutes)
router.use('/comic', comicRoutes)
router.use('/chapter', chapterRoutes)

module.exports = router
