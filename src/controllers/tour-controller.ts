import { Request, Response, NextFunction } from 'express'

const checkID = (
    req: Request, 
    res: Response, 
    next: NextFunction, 
    val: number
) => {
    // res.status(500).json({
    //     status: 'error',
    //     messafe: 'This route is not yet defined!',
    //     val
    // })

    next()

}

const checkBody = (
    req: Request, 
    res: Response, 
    next: NextFunction,
) => {
    // res.status(500).json({
    //     status: 'error',
    //     messafe: 'This route is not yet defined!'
    // })
    next()
}

const getAllTours = (    
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'getAllTours route is not yet defined!'
    })
}

const getTour = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'getTour route is not yet defined!'
    })
}

const createTour = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'createTour route is not yet defined!'
    })
}

const updateTour = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'updateTour route is not yet defined!'
    })
}

const deleteTour = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'deleteTour route is not yet defined!'
    })
}

export { 
    checkID,
    checkBody,
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour
} 