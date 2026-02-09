import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { UserServices } from "./user.service";
import { Request, Response } from "express";

const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await UserServices.createDoctor(payload)
        res.status(status.CREATED).json({
            success: true,
            message: "Doctor registered successfully.",
            data: result
        })
    }
)

export const UserController = {
    createDoctor,
}