import { prisma } from "../../lib/prisma"

const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: true
        }
    })
    return doctors
}

export const DoctorServices = {
    getAllDoctors,
}