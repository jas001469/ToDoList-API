import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './lib/db.js'
import cookieParser from "cookie-parser";

import authRoutes from './routes/authRoute.js'
import taskRoutes from './routes/taskRoute.js'


dotenv.config()
const server = express()

const PORT = process.env.PORT;

server.use(express.json())
server.use(cookieParser());

server.use('/api/auth', authRoutes) //authentication routes
server.use('/api',taskRoutes) //task routes

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
    connectDB()
})