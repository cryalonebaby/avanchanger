const {Router} = require('express')
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const {oneOf, check, validationResult} = require('express-validator')
const validator = require('validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('username', 'username обязательно').exists(),
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина 6 символов')
        .isLength({ min: 6})
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors,
                message: 'Некорректные данные при регистрации'
            })
        }

        const {username, email, password} = req.body

        const candidate = await User.findOne({ email: email })
        const usernameCandidate = await User.findOne({ username: username})

        // if (formErrors.length === 0) {
        //     return res.status(400).json({ message: formErrors})
        // }

        if (candidate) {
            return res.status(400).json({ message: 'Такой email уже существует'})
        }

        if (usernameCandidate) {
            return res.status(400).json({ message: 'Такой username уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ username: username, email: email, password: hashedPassword})

        await user.save()

        res.status(201).json({ message: 'Пользователь создан'})



    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').exists(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors,
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {email, password} = req.body

        const username = !validator.isEmail(email) ? email : null

        const user = await User.findOne({
            $or: [
                {username: username},
                {email: email} 
            ]
        })

        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный Логин или пароль'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.json({ token, userId: user.id}) // res.status(200) by default

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
    }
})

// /api/auth/users
router.get(
    '/:id',
    (req, res) => {
        try {
            User.find({_id: req.params.id})
            .then((result) => {
                res.send(result)
            })
            .catch(e => {
                console.log(e);
            })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

router.post(
    '/:id',
    (req, res) => {
        try {
            
        } catch (e) {
            console.log(e);
        }
    }
    //TODO
)

module.exports = router