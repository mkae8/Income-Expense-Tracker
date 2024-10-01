import { Router } from "express";
import { testController } from "../controllers/users/test.controller.js";

const testRouter = Router();

testRouter.post("/user/dbtest", testController);
testRouter.put("/user/dbtest", testController);
testRouter.delete("/user/dbtest", testController);

export default testRouter;
