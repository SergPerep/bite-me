import express from "express";
import foodsRouter from "./components/foods"
const app = express();

app.use(express.json());

app.use("/foods", foodsRouter);

export default app;