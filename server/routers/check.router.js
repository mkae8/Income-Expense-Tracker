import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { checkBalanceController } from "../controllers/users/checkBalance.controller.js";

const checkRouter = Router();

checkRouter.get("./user/check", authMiddleware, checkBalanceController);

export default checkRouter;
