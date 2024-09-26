import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { income } from "../controllers/users/income.js";

const incomeRouter = Router();

incomeRouter.get("/user/income", authMiddleware, income);

export default incomeRouter;
