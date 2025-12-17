import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'

import tourRouter from './routes/tour-routes'
import userRouter from './routes/user-routes'

const app: Application = express()

// MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use((req: Request, res: Response, next) => {
    console.log('Middle | ware ======================')
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

export default app
