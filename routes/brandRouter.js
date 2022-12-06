const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')


router.post ('/',brandController.create) // метод пост чтобы создавать (путь)
router.get("/",brandController.getAll) // методы гет чтобы получать



module.exports = router