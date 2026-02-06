import { Specialty } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
    const specialty = await prisma.specialty.create({data: payload})
    return specialty
}

const getAllSpecialties = async (): Promise<Specialty[]> => {
    const specialties = await prisma.specialty.findMany()
    return specialties
}

const updateSpecialty = async (id: string, data: Partial<Specialty>): Promise<Specialty> => {
    const result = await prisma.specialty.update({where: {id}, data})
    return result
}

const deleteSpecialty = async (id: string): Promise<Specialty> => {
    const specialty = await prisma.specialty.delete({where: {id}})
    return specialty
}

export const SpecialtyServices = {
    createSpecialty,
    getAllSpecialties,
    updateSpecialty,
    deleteSpecialty
}