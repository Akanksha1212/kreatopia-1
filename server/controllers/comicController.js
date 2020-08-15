const { Comic } = require('../models');

class Controller {

    static create(req, res, next) {
        const obj = {
            UserId: req.userData.id,
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
        }
        Comic.create(obj)
        .then((data) => res.status(201).json(data))
        .catch(next)
    }

    static findAll(req, res, next) {
        Comic.findAll()
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static findOne(req, res, next) {
        const option = { where: { id: req.params.id }}
        Comic.findOne(option)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                throw { status: 404, message: 'Data not found' }
            }
        })
        .catch(next)
    }

    static findCreatorComic(req, res, next) {
        const option = { where: { UserId: req.params.id }}
        Comic.findAll(option)
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
            title: req.body.title,
            thumbnail: req.body.thumbnail,
            description: req.body.description,
        }
        const option = { where: { id: req.params.id }}
        Comic.update(obj, option)
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static destroy(req, res, next) {
        const option = { where: { id: req.params.id }}
        Comic.findOne(option)
        .then((current) => {
            if (current) {
                Comic.destroy(option)
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