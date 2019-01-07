require('dotenv').config()

export default {
  portServer: process.env.PORT || process.env.SERVER_PORT,

  smtp: {
    service: 'gmail',
    auth: {
      name: process.env.SMTP_NAME || 'no-reply',
      user: process.env.SMTP_USER || 'no-reply@domain.example',
      pass: process.env.SMTP_PASS || 'MyAwesomePassword'
    }
  },

  mailTo: process.env.NODE_ENV === 'development'
    ? process.env.MAIL_TEST || 'test@domain.example'
    : process.env.MAIL_CLIENT || 'client@domain.example'
}
