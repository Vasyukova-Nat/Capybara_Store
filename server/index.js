const express = require('express')
require('dotenv').config()  // импорт модуля dotenv чтобы переменная PORT могла считываться из файла .env
const sequelize = require('./db')
const models = require('./models/models')  // импорт всех моделей типов данных в БД
const cors = require('cors')  // импорт пакета Cors 

const PORT = process.env.PORT || 5000  //считывается из файла .env, но в случае если он пустой - по умолчанию 5000

const app = express()
app.use(cors())
app.use(express.json())  // чтобы приложение могло парсить JSON-формат

app.get('/', (req, res) => {
    // res.send('MEOW!')  // также работает
    res.status(200).json({message: 'Working!'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}, meow`))
    } catch (e) {
        console.log(e)
    }
}

start()




