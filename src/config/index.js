export default {
    port: process.env.PORT || '3000',
    cors: {
        origin: 'https://lovatti-server.herokuapp.com/',
        optionsSuccessStatus: 200
    }
}