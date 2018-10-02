import nodeMailer from 'nodemailer'
import MailModel from './../models/mail'

export default {
    sendMail: (req, res, next) => {
        const msg = MailModel.data.msgs
        const smtp = MailModel.data.smtpConfig
        const mailTo = MailModel.data.mailTo
        
        const transporter = nodeMailer.createTransport(smtp)
        let d = new Date()
        d = `#${String(d.getFullYear()).substr(2,2)}${d.getHours() + d.getMinutes() + d.getMilliseconds()}`

        const mailOptions = {
            from: `"${smtp.auth.name}" <${smtp.auth.user}>`,
            to: `${mailTo}`,
            subject: `${d} | Formulário Site | ${req.body.subject}`,
            html: `${req.body.body}`,
            replyTo: `"${req.body.email}" <${req.body.name}>`
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