import express from 'express'
import controller from '../controller'

const router = express.Router()

router.post('/', controller.sendNewsletter)

export default router
