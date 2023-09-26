import { Router } from "express";
import product from "./product";
import user from "./user";

const routes=Router();

routes.use('/products',product)
routes.use('/users',user)
export default routes;