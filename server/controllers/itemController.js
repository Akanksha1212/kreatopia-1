const { Item } = require('../models');

class Controller {

    static create(req, res, next) {
        const obj = {
            UserId: req.userData.id,
            name: req.body.name,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
        }
        Item.create(obj)
        .then((data) => res.status(201).json(data))
        .catch(next)
    }

    static findAll(req, res, next) {
        const option = { include: [{ model: User, as: 'User'}] }
        Item.findAll(option)
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static findOne(req, res, next) {
        const option = {
            where: { id: req.params.id },
            include: [{ model: User, as: 'User'}]
        }
        Item.findOne(option)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                throw { status: 404, message: 'Data not found' }
            }
        })
        .catch(next)
    }

    static findUserItem(req, res, next) {
        const option = { where: { UserId: req.params.id }}
        Item.findAll(option)
        .then((result) => {
            if (result) {
                res.status(200).json(result)
            } else {
                throw { status: 404, message: 'Data not found' }
            }
        })
        .catch(next)
    }

    static update(req, res, next) {
        const obj = {
            UserId: req.userData.id,
            name: req.body.name,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
        }
        const option = { where: { id: req.params.id }}
        Item.update(obj, option)
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static destroy(req, res, next) {
        const option = { where: { id: req.params.id }}
        Item.findOne(option)
        .then((current) => {
            if (current) {
                Item.destroy(option)
                .then((data) => res.status(200).json(data))
                .catch(next)
            } else {
                throw {status: 404, message: 'Data not found!'}
            }
        })
        .catch(next)
    }
}

module.exports = Controller