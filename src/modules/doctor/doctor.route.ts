import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

router.get("/", DoctorController.getAllDoctors)

// TODO:
// getDoctorById
// updateDoctor
// deleteDoctor = soft delete

export const DoctorRoutes: Router = router