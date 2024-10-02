import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";
import categoryRouter from "./routers/category.router.js";
import currencyRouter from "./routers/currency.router.js";
import balanceRouter from "./routers/balance.router.js";
import checkRouter from "./routers/check.router.js";
import incomeRouter from "./routers/income.router.js";
import testRouter from "./routers/test.router.js";
// .env файлыг унших
env.config({ path: "./.env" });

const app = express();
const port = process.env.PORT; // Портын дугаар

// CORS болон JSON-ийг тохируулах
app.use(cors());
app.use(express.json());

// API маршрутуудыг тохируулах
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", currencyRouter);
app.use("/", balanceRouter);
app.use("/", checkRouter);
app.use("/", incomeRouter);
app.use("/", testRouter);

// Серверийг ажиллуулах
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
