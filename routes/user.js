import express from 'express';
import controller from '../controller/user.js'

const router = express.Router()
router.route('/')
.get(controller.getUsers)

router.route('/login')
.post(controller.addUser)

router.route('/:userID')

.get(controller.getUser)
.patch(controller.editUser)
.delete(controller.deleteUser)

export default router
