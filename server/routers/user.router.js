import { Router } from "express";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";
import { authMiddleware } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
// userRouter.get("/users", authMiddleware, confirm);
// userRouter.post("/users", authMiddleware, confirm);

export default userRouter;
