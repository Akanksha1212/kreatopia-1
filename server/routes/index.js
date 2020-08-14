const express = require('express')
const router  = express.Router()

const userRoutes = require('./userRoutes.js')

router.get('/', function(req, res, next) {
    res.status(200).json({
        message: 'You are connected to the server.'
    })
})

router.use('/user', userRoutes)

module.exports = router
