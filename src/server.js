import express from 'express'
import { json } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

import MailRouter from './routes/mail'
import config from './config'

// Server instance
const server = express()

// Parsing data to json
server.use(json())

// Log server event in a string format
server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// Security protocols
server.use(cors(config.cors))
server.use(compression())
server.use(helmet())

// Config routes into server
server.use(MailRouter)

// Servre port listener
server.listen(config.port)