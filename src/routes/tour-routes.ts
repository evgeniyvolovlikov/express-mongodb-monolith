import express, { Router } from 'express'
import {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour
} from '../controllers/tour-controller'

const router: Router = express.Router()

router.route('/').get(getAllTours).post(createTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

export default router
