const {Router} = require('express')
const router = require('../app')

const routter = require(Router)

routter.get(
    '/admin',
    (req,res) => {
        try {
            return res.redirect(router)
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = routter