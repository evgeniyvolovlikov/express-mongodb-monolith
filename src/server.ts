import mongoose from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

dotenv.config({ path: './config.env' })
const db = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

const port = process.env.PORT || 3001

const start = async () => {
    try {
        await mongoose.connect(db)
        console.log('DB connection successful!')
        app.listen(port, () => {
            console.log(`App running on port ${port}...`)
        })
    } catch (err) {
        if (err instanceof Error) {
            console.error('Database connection error:', err.message)
        } else {
            console.error('An unknown error occurred:', err)
        }
        process.exit(1)
    }
}

start()
