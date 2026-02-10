import { NextFunction, Request, Response } from "express";
import z from "zod";

export const validateRequest = (zodSchema: z.ZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const parsedResult = zodSchema.safeParse(req.body)
        if(!parsedResult.success){
            next(parsedResult.error)
        }
        // senitize data = replace the req.body to zod parsed data which is validated.
        req.body = parsedResult.data
        next()
    }
}