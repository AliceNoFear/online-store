const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const UserController = require('../controllers/userController')

router.post ('/registration', userController.registration) // метод пост чтобы создавать (путь)
router.post('/login',userController.login) // методы гет чтобы получать
router.get('/auth', userController.check)


module.exports = router