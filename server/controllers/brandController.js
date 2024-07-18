const {Brand} = require('../models/models')  // импорт модели типа
const ApiError = require('../error/ApiError');  // импорт обработчика ошибок

class BrandController {
    async create(req, res) {
        const {name} = req.body  // делаем деструктуризацию. Из тела запроса извлекаем название данного типа
        const brand = await Brand.create({name})  // создаём данный тип. Функция асинхронная (т.к. любые запросы к БД - асинхронные), поэтому добавляем await.
        return res.json(brand)
    }  // Использование: POST http://localhost:5000/api/brand , body: {"name": "Apple"}

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)  // возвращаем весь массив объектов
    }  // Использование: GET http://localhost:5000/api/brand (no body)
}

module.exports = new BrandController()