import { Router } from "express";
import product from "./product";

const routes=Router();

routes.use('/products',product)

export default routes;