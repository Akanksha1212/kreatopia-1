const { Chapter } = require('../models');

class Controller {

    static create(req, res, next) {
        const obj = {
            UserId: req.userData.id,
            ComicId: req.body.ComicId,
            title: req.body.title,
            image_url: req.body.image_url,
        }
        Chapter.create(obj)
        .then((data) => res.status(201).json(data))
        .catch(next)
    }

    static findAll(req, res, next) {
        Chapter.findAll()
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static findOne(req, res, next) {
        const option = { where: { id: req.params.id }}
        Chapter.findOne(option)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                throw { status: 404, message: 'Data not found' }
            }
        })
        .catch(next)
    }

    static findComicChapter(req, res, next) {
        const option = { where: { ComicId: req.params.ComicId }}
        Chapter.findAll(option)
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
            ComicId: req.body.ComicId,
            title: req.body.title,
            image_url: req.body.image_url,
        }
        const option = { where: { id: req.params.id }}
        Chapter.update(obj, option)
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static destroy(req, res, next) {
        const option = { where: { id: req.params.id }}
        Chapter.findOne(option)
        .then((current) => {
            if (current) {
                Chapter.destroy(option)
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