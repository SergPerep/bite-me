import { Router } from "express";
import { ObjectId } from "mongodb";
const router = Router();

router.get("/", async(req, res) => {
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.find({}).toArray();
    res.json(result);
});

router.get("/:id", async(req, res) => {
    const idStr = req.params.id;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.findOne({ _id: new ObjectId(idStr) });
    res.json(result);
})

router.post("/", async(req, res) => {
    const body = req.body;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.insertOne(body);
    res.json(`Inserted a doc with id=${result.insertedId}`);
});

router.put("/:id", async(req, res) => {
    const idStr = req.params.id;
    const body = req.body;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.updateOne({ _id: new ObjectId(idStr) }, { $set: { ...body } });
    res.json(`Updated ${result.modifiedCount} doc(s)`);
});

router.delete("/:id", async(req, res) => {
    const idStr = req.params.id;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.deleteOne({ _id: new ObjectId(idStr) });
    res.json(`Deleted ${result.deletedCount} doc(s)`);
})



export default router;