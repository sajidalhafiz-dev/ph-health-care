import { Router } from "express";
import { SpecialtyRoutes } from "../modules/specialty/specialty.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { DoctorRoutes } from "../modules/doctor/doctor.route";

const router = Router()

// Auth Routes
router.use("/auth", AuthRoutes)

// User Routes
router.use("/users", UserRoutes)

// Doctor Routes
router.use("/doctors", DoctorRoutes)

// Specialties Routes
router.use("/specialties", SpecialtyRoutes)

export const IndexRoutes: Router = router