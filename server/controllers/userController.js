// Функции лучше прописывать не в роутере, а в отдельной папке controllers.

class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {
        
    }

    async check(req, res) {
        // Version 3
        // res.json('aaaaaaaaa')  // вызываем функцию json у response

        // Version 4
        const query = req.query  // из строки запроса получаем её параметры
        res.json(query)
        // либо можем сразу вытащить из параметров только id:
        // const {id} = req.query  
        // res.json(id)
    }
}

module.exports = new UserController()
