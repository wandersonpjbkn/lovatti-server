export default {
    data: {
        params: {
            // Default data
            subject: { type: String, default: '', required: true },
            name: { type: String, default: '', required: true },
            mail: { type: String, default: '', required: true },
            phone: { type: String, default: '', required: false },
            msg: { type: String, default: '', required: false },
    
            // Resale only
            cpf: { type: String, default: '', required: true },
            rg: { type: String, default: '', required: true },
            zipcode: { type: String, default: '', required: true },
            address: { type: String, default: '', required: false },
            number: { type: String, default: '', required: false },
            aside: { type: String, default: '', required: false },
            area: { type: String, default: '', required: false },
            city: { type: String, default: '', required: false }
        },
        
        smtpConfig: {
            host: 'mail.brazip.eng.br',
            port: 587,
            secure: false,
            tls: {
                rejectUnauthorized:false
            },
            auth: {
                name: 'no-reply',
                user: 'no-reply@brazip.eng.br',
                pass: 'Bra@102030'
            }
        },

        msgs: {
            error: 'Houve um erro ao tentar enviar sua mensagem. Por favor tente mais tarde ou envie uma mensagem diretamente do seu e-mail',
            succeed: 'Sua mensagem foi enviada com sucesso. Breve retornaremos'
        },
    
        // mailTo: 'lovatti@lovatticonfeccoes.com.br'
        mailTo: 'web@perfectimage.com.br'
    }
}
