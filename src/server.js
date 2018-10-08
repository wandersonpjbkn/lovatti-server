import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import morgan from 'morgan'
import { log } from 'util'
import MemoryStore from 'express-rate-limiter/lib/memoryStore'
import RateLimit from 'express-rate-limiter'

import MailFormRouter from './form/routes'
import config from './config'

// Server instance
const server = express()

const limiter = new RateLimit({ db: new MemoryStore() })

// Log server event in a string format
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Security protocols
server.use(cors())
server.use(compression())
server.use(helmet())

// Parsing data to json
server.use(json())

// Limite rate access request
server.enable("trust proxy")
server.use(limiter.middleware())

// Config routes into server
server.use(MailFormRouter)

// Error handle
server.use((err, req, res, next) => {
    // render the error page
    res.status(err.status || 400)
    process.env.NODE_ENV !== 'production' && log(err.message)
})

// Server port listener
server.listen(config.port, () => {
    process.env.NODE_ENV !== 'production' && log(`Server running on port: ${config.port}`)
})