import { NextFunction, RequestHandler, Request, Response } from "express"

export const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (e) {
            next(e) // this is calling globalErrorHandler.ts
        }
    }
}