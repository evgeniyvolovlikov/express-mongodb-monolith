import { model, Schema } from 'mongoose'

interface ITour {
    name: string
    duration: number
    maxGroupSize: number
    createdAt: Date
    price: number
}

const tourSchema = new Schema<ITour>({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true,
        maxLength: [
            40,
            'A tour name must have less or equal then 40 characters'
        ],
        minlength: [
            10,
            'A tour name must have more or equal then 10 characters'
        ]
    },
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a group size']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = model<ITour>('Tour', tourSchema)

export default Tour
