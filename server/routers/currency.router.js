import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { curencyController } from "../controllers/users/curency.controller.js";

const currencyRouter = Router();

currencyRouter.post("/currency", authMiddleware, curencyController);

export default currencyRouter;
