// Функции лучше прописывать не в роутере, а в отдельной папке controllers.

class UserController {
    async registration(req, res) {
        
    }

    async login(req, res) {
        
    }

    async check(req, res) {
        res.json('aaaaaaaaa')  // вызываем функцию json у response
    }
}

module.exports = new UserController()
