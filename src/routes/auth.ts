import { Router } from "express";
import AuthController from "../controller/AuthController";

const routes= Router();
routes.post('/login',AuthController.login)

export default routes;