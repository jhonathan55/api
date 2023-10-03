import { Router } from "express";
import { ProductController } from "../controller/ProductController";
import { checkJwt } from "../middleware/jwt";

const router = Router();
    router.post('/',[checkJwt],ProductController.new)
    router.get('/',ProductController.getAll)
    router.get('/:id',ProductController.getById)
    router.delete('/:id',ProductController.delete)
    router.patch('/:id',ProductController.update)
export default router;