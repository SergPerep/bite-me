import express from "express";
const app = express();

app.use(express.json());


app.get("/foods", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const foods = await foodsColl.find({}).toArray();
    res.json(foods);
})

export default app;