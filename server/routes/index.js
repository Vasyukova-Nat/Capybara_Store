// Данный файл - связующее звено для всех маршрутов (routes).

const Router = require('express')
const router = new Router()

// Импорт всех созданных роутов из папки routes
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

// Передаём URL по которому будут работать роутеры и сами роутеры
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
