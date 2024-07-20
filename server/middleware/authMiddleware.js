// Этот Middleware декодирует jwt-токен и проверяет его на валидность.

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // header - часть jwt-токена, в которой зашифрованы тип токена и сам токен, например - Bearer asfasnfkajsfnjk. .split(' ') - разделить тип токена и токен по пробелу.
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)  // функция .verify проверяет токен на валидность. SECRET_KEY находится в переменных окружения (.env).
        req.user = decoded  // добавим к запросу декодированный токен
        next()  // вызов следующего в цепочке Middleware 
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};
