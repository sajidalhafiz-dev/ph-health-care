import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyServices } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await SpecialtyServices.createSpecialty(payload)
        res.status(201).json({
            success: true,
            message: "Specailty created successfully.",
            data: result
        })
    }
)


const getAllSpecialties = catchAsync(
    async (req: Request, res: Response) => {
        const result = await SpecialtyServices.getAllSpecialties()
        res.status(200).json({
            success: true,
            message: "All Specialties.",
            data: result
        })
    }
)


//// Normal ////
// const getAllSpecialties = async (req: Request, res: Response) => {
//     try {
//         const result = await SpecialtyServices.getAllSpecialties()
//         res.status(200).json({
//             success: true,
//             message: "All Specialties.",
//             data: result
//         })
//     } catch (e) {
//         console.error(e)
//         res.status(500).json({
//             success: false,
//             message: "Faild to fetch specialties.",
//             details: e
//         })
//     }
// }

const updateSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await SpecialtyServices.updateSpecialty(id as string, req.body)
        res.status(200).json({
            success: true,
            message: "Specialty updated successfully.",
            data: result
        })
    }
)

const deleteSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await SpecialtyServices.deleteSpecialty(id as string)
        res.status(200).json({
            success: true,
            message: "Specialty deleted successfully.",
            data: result
        })
    }
)


export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    updateSpecialty,
    deleteSpecialty
}