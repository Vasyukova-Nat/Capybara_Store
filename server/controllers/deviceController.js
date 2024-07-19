const uuid = require('uuid')  // пакет для генерирования рандомных уникальных id
const path = require('path');  // модуль для расположения файла изображения
const {Device, DeviceInfo} = require('../models/models')  // импорт модели девайса для БД

class DeviceController {
    async create(req, res) {  // добавление девайса
        const {name, price, brandId, typeId, info} = req.body  // название, цена, id бренда, id типа и характеристики
        const {img} = req.files  // фото устройства. Для него нужно установить пакет - npm i express-fileupload
        let fileName = uuid.v4() + ".jpg"  // нужно для файла сгенерировать уникальное имя. Для этого установим пакет - npm i uuid. Он будет генерировать случайные id.
        img.mv(path.resolve(__dirname, '..', 'static', fileName))  // переместить файл в папку static
        
        const device = await Device.create({name, price, brandId, typeId, img: fileName});  // создать девайс

        return res.json(device)
    }

    async getAll (req, res) {
        
    }

    async getOne (req, res) {
        
    }
}

module.exports = new DeviceController()