import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";
import { register } from "../controllers/auth.controller.js";

const router = Router()

router.post("/register",validateSchema(registerSchema),register)
/*router.get("/login/:id") 
router.post("/logout") 
router.delete("/verify/:id") 
router.put("/profile/:id") */

export default router