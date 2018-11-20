import config from '../../config'
import model from '../model'
import nodemailer from 'nodemailer'


export default {
  sendNewsletter: (req, res, next) => {
    const transporter = nodemailer.createTransport(config.smtp)

    const mailOptions = {
      from: `"${config.smtp.auth.name}" <${config.smtp.auth.user}>`,
      to: `${config.mailTo}`,
      replyTo: `"${req.body.name}" <${req.body.mail}>`,
      subject: `Inscrição Newsletter`,
      html: `${req.body.body}`
    }

    transporter
      .sendMail(mailOptions)
        .then(info => {
          res
            .status(200)
            .send({
              sucesso: model.msgs.succeed,
              info: info
            })
        })
        .catch(err => {
          res
            .status(400)
            .send({
              erro: model.msgs.error,
              info: `${err}`
            })
        })
  }
}
