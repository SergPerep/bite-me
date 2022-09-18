import { Router } from "express";
import { ObjectId } from "mongodb";
import sc from "../utils/statusCodes";
const router = Router();

router.get("/", async(req, res, next) => {
    try {
        const catColl = req.app.locals.catColl;
        const result = await catColl.find({}).toArray();
        res.status(sc.ok).json(result);
        
    } catch (error) {
        next(error)
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const idStr  = req.params.id;
        const catColl = req.app.locals.catColl;
        const result = await catColl.findOne({ _id: new ObjectId(idStr) });
        res.status(sc.ok).json(result);
        
    } catch (error) {
        next(error)
    }
});

router.post("/", async(req, res, next) => {
    try {
        const catColl = req.app.locals.catColl;
        const body = req.body;
        const result = await catColl.insertOne(body);
        res.status(sc.created).json(`Inserted a doc: id=${result.insertedId}`);
        
    } catch (error) {
        next(error)
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const idStr = req.params.id;
        const catColl = req.app.locals.catColl;
        const { name } = req.body;
        const result = await catColl.updateOne({ _id: new ObjectId(idStr) }, { $set: { name } });
        res.status(sc.ok).json(result);
        
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", async(req, res, next) => {
    try {
        const idStr = req.params.id;
        const catColl = req.app.locals.catColl;
        const result = await catColl.deleteOne({ _id: new ObjectId(idStr) });
        res.status(sc.ok).json(`Deleted ${result.deletedCount} doc(s)`);
        
    } catch (error) {
        next(error)
    }
})

export default router;