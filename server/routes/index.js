const express = require('express')
const router  = express.Router()

const userRoutes = require('./userRoutes.js')
const itemRoutes = require('./itemRoutes.js')

router.get('/', function(req, res, next) {
    res.status(200).json({
        message: 'You are connected to the server.'
    })
})

router.use('/user', userRoutes)
router.use('/items', itemRoutes)

module.exports = router
