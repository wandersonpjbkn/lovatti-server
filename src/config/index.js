export default {
    port: process.env.PORT || '3000',
    cors: {
        origin: (origin, next) => {
            let domain = [
                'http://lovatticonfeccoes.com.br/',
                'http://www.lovatticonfeccoes.com.br/',
                'https://lovatticonfeccoes.com.br/',
                'https://www.lovatticonfeccoes.com.br/'
            ]
            if (!~domain.indexOf(origin)) {
                let msg = 'Não é permitido requisições desta origem'
                return next(new Error(msg), false)
            }
            return next(null, true)
        },
        optionsSuccessStatus: 200
    }
}