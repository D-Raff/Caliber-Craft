import express from 'express';
import controller from '../controller/user.js';
import hashpwdBeforeAdd from '../middleware/hashUserPwd.js';

const router = express.Router()
router.route('/')
.get(controller.getUsers)
.post(hashpwdBeforeAdd,controller.addUser)

router.route('/:userID')

.get(controller.getUser)
.patch(controller.editUser)
.delete(controller.deleteUser)

export default router
