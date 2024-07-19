const uuid = require('uuid')  // пакет для генерирования рандомных уникальных id
const path = require('path');  // модуль для расположения файла изображения
const {Device, DeviceInfo} = require('../models/models')  // импорт модели девайса для БД
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {  // добавление девайса
        try {
            let {name, price, brandId, typeId, info} = req.body  // название, цена, id бренда, id типа и характеристики
            const {img} = req.files  // фото устройства. Для него нужно установить пакет - npm i express-fileupload
            let fileName = uuid.v4() + ".jpg"  // нужно для файла сгенерировать уникальное имя. Для этого установим пакет - npm i uuid. Он будет генерировать случайные id.
            img.mv(path.resolve(__dirname, '..', 'static', fileName))  // переместить файл в папку static
            const device = await Device.create({name, price, brandId, typeId, img: fileName});  // создать девайс

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const {brandId, typeId} = req.query  // Если оба не указаны то возвращаем все девайсы, если хотя бы один указан - будет фильтрация. query - строка запроса. 
        let devices;
        if (!brandId && !typeId) {  // Если нет обоих
            devices = await Device.findAll()  // Запрос к БД. Функция асинхронная.
        }
        if (brandId && !typeId) {  // Если есть бренд, но нет типа
            devices = await Device.findAll({where:{brandId}})
        }
        if (!brandId && typeId) {
            devices = await Device.findAll({where:{typeId}})
        }
        if (brandId && typeId) {  // Если оба указаны
            devices = await Device.findAll({where:{typeId, brandId}})
        }
        return res.json(devices)
    }

    async getOne (req, res) {
        const {id} = req.params  // id указывали в deviceRouter.js - router.get('/:id'...
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()