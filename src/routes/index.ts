import { Router } from "express";
import product from "./product";
import user from "./user";
import auth from "./auth";

const routes=Router();

routes.use('/products',product)
routes.use('/users',user)
routes.use('/auth',auth)
export default routes;