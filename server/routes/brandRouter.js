const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
 
router.post('/', brandController.create)  // создать бренд
router.get('/', brandController.getAll)  // получение всех брендов

module.exports = router
