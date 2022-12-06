const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post ('/', deviceController.create) // метод пост чтобы создавать (путь)
router.get("/",deviceController.getAll) // методы гет чтобы получать

router.get('/:id',deviceController.getOne)



module.exports = router