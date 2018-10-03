export default {
    port: process.env.PORT || '3000',
    cors: {
        origin: (origin, next) => {
            let domain = [
                'https://lovatti-server.herokuapp.com/',
                'https://lovatticonfeccoes.com.br/'
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