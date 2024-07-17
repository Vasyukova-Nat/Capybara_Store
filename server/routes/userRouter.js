const Router = require('express')
const router = new Router()

router.post('/registration', )  // Метод POST, регистрация
router.post('/login', )  // Метод POST, авторизация
router.get('/auth', (req, res) => {  // Метод GET - проверка: авторизован пользователь или нет
    res.json({message: 'All working'})
})  

module.exports = router
