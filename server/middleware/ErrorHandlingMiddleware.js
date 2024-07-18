// Middleware - обработчик, который находится между запросом на сервер и обрабатывающей его функцией на сервере. Например проверка на авторизацию пользователя или на его роль (админ / обычный пользователь).

const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {  //функция next - 'передать управление следующему Middleware в цепи'
    if (err instanceof ApiError) { 
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: "Непредвиденная ошибка!"})
}
