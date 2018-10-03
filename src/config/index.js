export default {
    port: process.env.PORT || '3000',
    cors: {
        origin: 'https://lovatti-server.herokuapp.com/send',
        optionsSuccessStatus: 200
    }
}