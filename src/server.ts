import mongoose from 'mongoose'
import dotenv from 'dotenv'

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...')
    console.log(err.name, err.message)
    process.exit(1)
})

dotenv.config({ path: './config.env' })
import app from './app'

const db = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(db).then(() => console.log('DB connection successful!'))

const port = process.env.PORT || 3001
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...')

    if (err instanceof Error) {
        console.log(err.name, err.message)
    } else {
        console.log('An unknown error occurred', err)
    }

    server.close(() => {
        process.exit(1)
    })
})
