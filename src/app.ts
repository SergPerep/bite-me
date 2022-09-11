import express from "express";
import { ObjectId } from "mongodb";
const app = express();

app.use(express.json());

app.get("/foods", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const foods = await foodsColl.find({}).toArray();
    res.json(foods);
})

app.get("/foods/:id", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const id = req.params.id;
    const food = await foodsColl.findOne({ _id: new ObjectId(id) });
    res.json(food);
})

app.post("/foods", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const body = req.body;
    
    const result = await foodsColl.insertOne(body);
    res.json(`Inserted doc ${result.insertedId}`);
});

app.put("/foods/:id", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const id = req.params.id;
    const body = req.body;
    await foodsColl.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { ...body } }
    );
    res.json(`Updated a doc`);
})

app.delete("/foods/:id", async(req, res) => {
    const foodsColl = app.locals.foodsColl;
    const id = req.params.id;
    await foodsColl.deleteOne({ _id: new ObjectId(id) } );
    res.json(`Deleted a doc`);
})

export default app;