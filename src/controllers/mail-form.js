import nodeMailer from 'nodemailer'
import MailFormModel from './../models/mail-form'

export default {
    sendMail: (req, res, next) => {
        const msg = MailFormModel.data.msgs
        const smtp = MailFormModel.data.smtpConfig
        const mailTo = MailFormModel.data.mailTo
        
        const transporter = nodeMailer.createTransport(smtp)
        let d = new Date()
        d = `#${String(d.getFullYear()).substr(2,2)}${d.getHours() + d.getMinutes() + d.getMilliseconds()}`

        const mailOptions = {
            from: `"${smtp.auth.name}" <${smtp.auth.user}>`,
            to: `${mailTo}`,
            subject: `${d} | Formulário Site | ${req.body.subject}`,
            html: `${req.body.body}`,
            replyTo: `${req.body.email}`
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return next(
                res
                    .status(400)
                    .send({
                        erro: msg.error,
                        info: `${err}`
                    })
            )
            res
                .status(200)
                .send({
                    successo: msg.succeed,
                    info: info
                })
        })
    }
}