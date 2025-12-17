import { Request, Response } from 'express'

const getAllUsers = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'getAllUsers route is not yet defined!'
    })
}

const getUser = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'getUser route is not yet defined!'
    })
}

const createUser = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'createUser route is not yet defined!'
    })
}

const updateUser = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'updateUser route is not yet defined!'
    })
}

const deleteUser = (
    req: Request, 
    res: Response
) => {
    res.status(500).json({
        status: 'error',
        messafe: 'deleteUser route is not yet defined!'
    })
}

export { 
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
 }