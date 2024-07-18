const {Type} = require('../models/models')  // импорт модели типа
const ApiError = require('../error/ApiError');  // импорт обработчика ошибок

class TypeController {
    async create(req, res) {
        const {name} = req.body  // делаем деструктуризацию. Из тела запроса извлекаем название данного типа
        const type = await Type.create({name})  // создаём данный тип. Функция асинхронная (т.к. любые запросы к БД - асинхронные), поэтому добавляем await.
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)  // возвращаем весь массив объектов
    }
}

module.exports = new TypeController()