import { Request, Response, NextFunction } from "express";
import status from "http-status";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if(process.env.NODE_ENV === 'development'){
        console.log("Error from global error handler", err)
    }

    let statusCode: number = status.INTERNAL_SERVER_ERROR
    let message: string = "Internal Server Error!"
        
    res.status(statusCode).json({
        success: false,
        message: message,
        error: err.message
    })
}