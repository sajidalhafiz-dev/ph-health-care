import { catchAsync } from "../../shared/catchAsync"
import { Request, Response } from "express"
import { UserServices } from "../user/user.service"
import status from "http-status"
import { DoctorServices } from "./doctor.service"

const getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {
        const result = await DoctorServices.getAllDoctors();
        res.status(status.OK).json({
            success: true,
            message: "Doctors Data",
            data: result
        })
    }
)

export const DoctorController = {
    getAllDoctors,
}
