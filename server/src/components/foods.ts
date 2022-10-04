import { Router } from "express";
const router = Router();
import { ObjectId } from "mongodb";
import validateFoodBody from "./validateFoodBody";
import sc from "../utils/statusCodes";

router.get("/", async (req, res, next) => {
  try {
    const foodsColl = req.app.locals.foodsColl;
    const pipeline = [
      {
        $set: {
          categoryIdObjects: {
            $map: {
              input: "$categoriesIds",
              as: "categoryIdStr",
              in: { $toObjectId: "$$categoryIdStr" },
            },
          },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "categoryIdObjects",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $unset: ["categoriesIds", "categoryIdObjects"],
      },
      {
        $set: {
          id: "$_id",
          categories: {
            $map: {
              input: "$categories",
              as: "category",
              in: { id: "$$category._id", name: "$$category.name" },
            },
          },
        },
      },
      {
        $unset: "_id",
      },
    ];
    const aggCursor = foodsColl.aggregate(pipeline);
    const foods = [];
    for await (const doc of aggCursor) {
      foods.push(doc);
    }
    res.status(sc.ok).json(foods);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const foodsColl = req.app.locals.foodsColl;
    const idStr = req.params.id;
    const food = await foodsColl.findOne({ _id: new ObjectId(idStr) });
    res.status(sc.ok).json(food);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const foodsColl = req.app.locals.foodsColl;
    const body = req.body;
    validateFoodBody(body);
    const result = await foodsColl.insertOne(body);
    res.status(sc.created).json(`Inserted doc ${result.insertedId}`);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const foodsColl = req.app.locals.foodsColl;
    const idStr = req.params.id;
    const body = req.body;
    await foodsColl.updateOne(
      { _id: new ObjectId(idStr) },
      { $set: { ...body } }
    );
    res.status(sc.ok).json(`Updated a doc`);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const foodsColl = req.app.locals.foodsColl;
    const idStr = req.params.id;
    await foodsColl.deleteOne({ _id: new ObjectId(idStr) });
    res.status(sc.ok).json(`Deleted a doc`);
  } catch (error) {
    next(error);
  }
});

export default router;
