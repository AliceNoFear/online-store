require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require ('./models/models')
const cors = require('cors') //Для того чтобы отправлять запросы  с браузера на сервер cors (в jsone  установили) почитать о ней
const fileUpload = require ('express-fileupload') //для работы с файлами
const router = require('./routes/index');// ТУТ мы подключаем главный маршрут routes INDEX.js в нем прописанны, все взаимодействия роутеров.
const { addHook } = require('./db');
const errorHandler =require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 500

const app = express()
app.use(cors())//
app.use(express.json())// передаем, чтобы наше  приложение могло парсить JSON
app.use(fileUpload({})) // иницилизация для работы с файлами
app.use('/api', router) // первый параметр URL, 2 параметр сам роутер

app.use(errorHandler)//обработка ошибок, последний Middleware


const start = async() =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
    } catch(e){
        console.log(e)
    }

}

start()

 