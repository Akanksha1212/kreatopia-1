const { Cart, Comic, Item } = require('../models')
const { verifyToken } = require('../helpers/jsonwebtoken.js')

function authentication(req, res, next) {
    try {
        const decoded = verifyToken(req.headers.token)
        req.userData = decoded
        next()
    } catch(err) {
        next(err)
    }
}

function creatorAuth(req, res, next) {
    try {
        if (req.userData.role == 'creator') {
            next()
        } else {
            next({ status: 401, message: 'Only creator is allowed!' })
        }
    }
    catch(err) {
        next({ status: 401, message: err })
    }
}

function itemAuthorization(req, res, next) {
    Item.findOne({ where: { id: req.params.id }})
        .then(data => {
            if (!data) {
                throw { status: 404, message: 'Data not found' }
            } else if (data.UserId == req.userData.id) {
                next()
            } else {
                throw { status: 403, message: 'You are not authorized to do that!' }
            }
        })
        .catch(next)
}

function comicAuthorization(req, res, next) {
    Comic.findOne({ where: { id: req.params.id }})
        .then(data => {
            if (!data) {
                throw { status: 404, message: 'Data not found' }
            } else if (data.UserId == req.userData.id) {
                next()
            } else {
                throw { status: 403, message: 'You are not authorized to do that!' }
            }
        })
        .catch(next)
}

function cartAuthorization(req, res, next) {
    Cart.findOne({ where: { id: req.params.id }})
        .then(data => {
            if (!data) {
                throw { status: 404, message: 'Data not found' }
            } else if (data.UserId == req.userData.id) {
                next()
            } else {
                throw { status: 403, message: 'You are not authorized to do that!' }
            }
        })
        .catch(next)
}

module.exports = { authentication, creatorAuth, itemAuthorization, comicAuthorization, cartAuthorization };
