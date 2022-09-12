import express from "express";
import foodsRouter from "./components/foods";
import categoriesRouter from "./components/categories";
const app = express();

app.use(express.json());

app.use("/foods", foodsRouter);
app.use("/categories", categoriesRouter);

export default app;