import { Router } from "express";
import { ObjectId } from "mongodb";
import sc from "../utils/statusCodes";
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const brandsColl = req.app.locals.brandsColl;
    const pipeline = [{ $set: { id: "$_id" } }, { $unset: "_id" }];
    const aggCursor = brandsColl.aggregate(pipeline);
    const brands = [];
    for await (const doc of aggCursor) {
      brands.push(doc);
    }
    res.status(sc.ok).json(brands);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const idStr = req.params.id;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.findOne({ _id: new ObjectId(idStr) });
    result.id = result._id;
    delete result._id;
    res.status(sc.ok).json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.insertOne(body);
    res.status(sc.created).json(`Inserted a doc with id=${result.insertedId}`);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const idStr = req.params.id;
    const body = req.body;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.updateOne(
      { _id: new ObjectId(idStr) },
      { $set: { ...body } }
    );
    res.status(sc.ok).json(`Updated ${result.modifiedCount} doc(s)`);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const idStr = req.params.id;
    const brandsColl = req.app.locals.brandsColl;
    const result = await brandsColl.deleteOne({ _id: new ObjectId(idStr) });
    res.status(sc.ok).json(`Deleted ${result.deletedCount} doc(s)`);
  } catch (error) {
    next(error);
  }
});

export default router;
