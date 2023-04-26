const { Router } = require('express')

const UserController = require('./controller/UserController')

const router = Router()

router.post('/user-create', UserController.createUser)
router.get('/user-list', UserController.listUsers)
router.put('/user-update/:id', UserController.updateUser)
router.delete('/user-delete/:id', UserController.deleteUser)

module.exports = router