// Функции лучше прописывать не в роутере, а в отдельной папке controllers.

const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {
        
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
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()
