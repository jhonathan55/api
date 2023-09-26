import { Router } from "express";
import { UserController } from "../controller/UserController";

const router = Router();
router.post('/',UserController.newUser)
export default router;