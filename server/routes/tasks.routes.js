import { Router } from "express";

const router = Router()

router.get("/tasks") 
router.get("/tasks/:id") 
router.post("/tasks") 
router.delete("/tasks/:id") 
router.put("/tasks/:id") 

export default router