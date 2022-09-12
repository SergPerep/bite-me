import { Router } from "express";
const router = Router();
import { ObjectId } from "mongodb";

router.get("/", async(req, res) => {
    const foodsColl = req.app.locals.foodsColl;
    const foods = await foodsColl.find({}).toArray();
    res.json(foods);
})

router.get("/:id", async(req, res) => {
    const foodsColl = req.app.locals.foodsColl;
    const id = req.params.id;
    const food = await foodsColl.findOne({ _id: new ObjectId(id) });
    res.json(food);
})

router.post("/", async(req, res) => {
    const foodsColl = req.app.locals.foodsColl;
    const body = req.body;
    
    const result = await foodsColl.insertOne(body);
    res.json(`Inserted doc ${result.insertedId}`);
});

router.put("/:id", async(req, res) => {
    const foodsColl = req.app.locals.foodsColl;
    const id = req.params.id;
    const body = req.body;
    await foodsColl.updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { ...body } }
    );
    res.json(`Updated a doc`);
})

router.delete("/:id", async(req, res) => {
    const foodsColl = req.app.locals.foodsColl;
    const id = req.params.id;
    await foodsColl.deleteOne({ _id: new ObjectId(id) } );
    res.json(`Deleted a doc`);
})

export default router;