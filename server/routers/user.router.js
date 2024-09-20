import { Router } from "express";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);

export default userRouter;
