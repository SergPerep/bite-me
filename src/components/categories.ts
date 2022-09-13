import { Router } from "express";
import { ObjectId } from "mongodb";
const router = Router();

router.get("/", async(req, res) => {
    const catColl = req.app.locals.catColl;
    const result = await catColl.find({}).toArray();
    res.json(result);
});

router.get("/:id", async(req, res) => {
    const idStr  = req.params.id;
    const catColl = req.app.locals.catColl;
    const result = await catColl.findOne({ _id: new ObjectId(idStr) });
    res.json(result);
});

router.post("/", async(req, res) => {
    const catColl = req.app.locals.catColl;
    const body = req.body;
    const result = await catColl.insertOne(body);
    res.json(`Inserted a doc: id=${result.insertedId}`);
});

router.put("/:id", async(req, res) => {
    const idStr = req.params.id;
    const catColl = req.app.locals.catColl;
    const { name } = req.body;
    const result = await catColl.updateOne({ _id: new ObjectId(idStr) }, { $set: { name } });
    res.json(result);
})

router.delete("/:id", async(req, res) => {
    const idStr = req.params.id;
    const catColl = req.app.locals.catColl;
    const result = await catColl.deleteOne({ _id: new ObjectId(idStr) });
    res.json(`Deleted ${result.deletedCount} doc(s)`);
})

export default router;