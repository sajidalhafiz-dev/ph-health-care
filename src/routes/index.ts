import { Router } from "express";
import { SpecialtyRoutes } from "../modules/specialty/specialty.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";

const router = Router()

// Auth Routes
router.use("/auth", AuthRoutes)

// Dortors Routes
router.use("/doctors", UserRoutes)

// Specialties Routes
router.use("/specialties", SpecialtyRoutes)

export const IndexRoutes: Router = router