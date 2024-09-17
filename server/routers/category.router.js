import { Router } from "express";
import { category } from "../controllers/category/category.js";

const categoryRouter = Router();

categoryRouter.route("/user/category").post(category);
categoryRouter.route("/user/category").get(category);

export default categoryRouter;
