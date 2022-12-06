const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
//const TypeController = require('../controllers/typeController')

router.post ('/',typeController.create) // метод пост чтобы создавать (путь)
router.get("/",typeController.getAll) // методы гет чтобы получать



module.exports = router