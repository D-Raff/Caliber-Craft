import express from 'express'
import controller from '../controller/user.js'
const router = express.Router()

router.route('/')
.post(controller.verifyUser)

export default router