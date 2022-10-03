import express from "express";
import foodsRouter from "./components/foods";
import categoriesRouter from "./components/categories";
import brandsRouter from "./components/brands";
import logRequests from "./utils/logRequests";
import handleErrors from "./components/errors/handleErrors";
import cors from "cors";
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(logRequests);

app.use("/foods", foodsRouter);
app.use("/categories", categoriesRouter);
app.use("/brands", brandsRouter);

app.use(handleErrors);

export default app;
