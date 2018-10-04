import express from 'express'
import MailFormController from '../controllers/mail-form'

const router = express.Router()

router.post('/send/form', MailFormController.sendMail)

export default router