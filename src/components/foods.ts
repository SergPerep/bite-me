import { Router } from "express";
const router = Router();
import { ObjectId } from "mongodb";
import { AppError } from "./errors/appErrors";

router.get("/", async(req, res, next) => {
    try {
        const foodsColl = req.app.locals.foodsColl;
        const foods = await foodsColl.find({}).toArray();
        res.json(foods);
    } catch (error) {
        next(error)
    }
})

router.get("/:id", async(req, res, next) => {
    try {
        const foodsColl = req.app.locals.foodsColl;
        const idStr = req.params.id;
        const food = await foodsColl.findOne({ _id: new ObjectId(idStr) });
        res.json(food);
    } catch (error) {
        next(error)
    } 
})

router.post("/", async(req, res, next) => {
    try {
        const foodsColl = req.app.locals.foodsColl;
        const body = req.body;
        
        const result = await foodsColl.insertOne(body);
        res.json(`Inserted doc ${result.insertedId}`);
    } catch (error) {
        next(error)
    }
    
});

router.put("/:id", async(req, res, next) => {
    try {
        const foodsColl = req.app.locals.foodsColl;
        const idStr = req.params.id;
        const body = req.body;
        await foodsColl.updateOne(
            { _id: new ObjectId(idStr) }, 
            { $set: { ...body } }
        );
        res.json(`Updated a doc`);
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async(req, res, next) => {
    try {
        const foodsColl = req.app.locals.foodsColl;
        const idStr = req.params.id;
        await foodsColl.deleteOne({ _id: new ObjectId(idStr) } );
        res.json(`Deleted a doc`);
    } catch (error) {
        next(error)
    }
})

export default router;
