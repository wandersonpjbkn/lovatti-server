import express from 'express'
import MailFormController from '../controller'

const router = express.Router()

router.post('/send/form', MailFormController.sendMail)

export default router