import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { balanceController } from "../controllers/users/balance.controller.js";

const balanceRouter = Router();

balanceRouter.post("/user/balance", authMiddleware, balanceController);

export default balanceRouter;
