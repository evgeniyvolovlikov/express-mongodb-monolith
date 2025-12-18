import fs from 'fs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Tour from '../models/tour-model'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../../config.env') })

const db = process.env.DATABASE!.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD!
)

mongoose.connect(db).then(() => console.log('DB connection successful!'))

const toursPath = path.join(__dirname, '..', 'mock-data', 'tours.json')

const tours = JSON.parse(fs.readFileSync(toursPath, 'utf-8'))

const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('Data successfully loaded!')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try {
        await Tour.deleteMany()
        console.log('Data successfully deleted!')
    } catch (err) {
        console.log(err)
    }
    process.exit()
}

if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}
