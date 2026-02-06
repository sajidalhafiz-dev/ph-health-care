import { NextFunction, RequestHandler, Request, Response } from "express"

export const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next)
        } catch (e) {
            console.error(e)
            res.status(500).json({
                success: false,
                message: "Faild",
                details: e
            })
        }
    }
}