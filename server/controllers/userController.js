// Функции лучше прописывать не в роутере, а в отдельной папке controllers.

const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')  // импорт модуля для хэширования паролей
const jwt = require('jsonwebtoken')  // импорт модуля для создания jwt-токенов
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}  // время действительности токена - 24 часа
        )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {  // если email или пароль путые, будем выводить ошибку
            return next(ApiError.badRequest('Некорректный email или password'))
        }

        const candidate = await User.findOne({where: {email}})  //проверим есть ли уже такой email в системе
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)  // 5 - сколько раз будет проводиться хэширование
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body  // из тела запроса получаем email, пароль
        const user = await User.findOne({where: {email}})  // проверяем есть ли пользователь с таким email
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)  // проверяем совпадает ли введенный пароль и пароль, сохраненный в БД
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)  // генерируем токен
        return res.json({token})
    }

    async check(req, res, next) {
        // Version 3
        // res.json('aaaaaaaaa')  // вызываем функцию json у response

        // Version 4
        // const query = req.query  // из строки запроса получаем её параметры
        // res.json(query)
        // либо: Чтобы не получать целиком весь объект query, можем воспользоваться деструктуризацией и сразу вытащить из параметров только id:
        // const {id} = req.query  
        // res.json(id)

        // Version 5
        // const {id} = req.query
        // if (!id) {
        //     return next(ApiError.badRequest('Не задан ID'))
        // }
        // res.json(id)

        // Version 8
        //res.json({message: 'All right!'})
        // Функция check будет генерировать новый токен и отправлять его на клиент.
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
