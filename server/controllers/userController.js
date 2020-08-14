const { User } = require('../models')
const { generateToken } = require('../helpers/jsonwebtoken.js')

class Controller {

    static register(req, res, next) {
        const { username, email, password} = req.body
        User.create({ username, email, password})
        .then(() => {
            res.status(201).json('Successfully registered new user')
        })
        .catch(next)
    }

    static login(req, res, next) {
        const obj = {
            email: req.body.email,
            password: req.body.password,
        }
        if (!obj.email) throw { status: 400, message: 'Please insert a valid email' }
        if (!obj.password) throw { status: 400, message: 'Please insert a password' }
        let option = {
            where: { email: obj.email }
        }
        User.findOne(option)
        .then(user => {
            if (!user) throw {status: 400, message: 'Wrong email/password'}

            const inputPass = obj.password
            const userPass = user.password

            // TODO: use 'bcrypt' to compare crypted password

            if (inputPass !== userPass) throw {status: 400, message: 'Wrong email/password'}

            const userProfile = {
                id: user.id,
                name: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
            }

            const token = generateToken(userProfile)
            res.status(200).json({ token, userProfile, message: 'Log in successful' })
        })
        .catch(next)
    }

    static getProfile(req, res, next) {
        User.findOne({ where: { id: req.userData.id }})
        .then(data => {
            if (data) {
                res.status(200).json({
                    name: data.name,
                    email: data.email,
                    avatar: data.avatar,
                    role: data.role,
                })
            } else {
                throw {status: 404, message: 'Data not found'}
            }
        })
        .catch(next)
    }
}

module.exports = Controller