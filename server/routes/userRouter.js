const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)  // Метод POST, регистрация
router.post('/login', userController.login)  // Метод POST, авторизация
router.get('/auth', userController.check)  // Метод GET - проверка: авторизован пользователь или нет

module.exports = router


