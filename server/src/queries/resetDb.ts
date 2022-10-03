import { Collection } from "mongodb";
import foods from "../mock-data/startData";
import { FoodFinal, FoodOriginal } from "../types";

const deleteAllCategories = async (catColl: Collection) => {
  const result = await catColl.deleteMany({});
  console.log(
    `-- Deleted ${result.deletedCount} docs from categories collection`
  );
};

const deleteAllBrands = async (brandsColl: Collection) => {
  const result = await brandsColl.deleteMany({});
  console.log(`-- Deleted ${result.deletedCount} docs from brands collection`);
};

const deleteAllFoods = async (foodsColl: Collection) => {
  const result = await foodsColl.deleteMany({});
  console.log(`-- Deleted ${result.deletedCount} docs from foods collection`);
};

const insertCategories = async (foods: FoodOriginal[], catColl: Collection) => {
  // Extract list of categories from foods array
  const catArr = foods.reduce((prevVal: string[], curVal) => {
    const categories = curVal.categories.reduce(
      (prevVal: string[], curVal) => [...prevVal, curVal],
      []
    );
    return [...prevVal, ...categories];
  }, []);
  const catSet = new Set(catArr);
  // Insert categories in DB
  const result = await catColl.insertMany(
    [...catSet].map((categoryStr) => ({ name: categoryStr }))
  );
  console.log(
    `-- Inserted ${result.insertedCount} docs into categories collection`
  );
};

const insertBrands = async (foods: FoodOriginal[], brandsColl: Collection) => {
  // Extract list of brands from foods
  const brandsArr = foods.reduce((prevVal: string[], curVal) => {
    if (!curVal.brand) return prevVal;
    return [...prevVal, curVal.brand];
  }, []);

  const brandsSet = new Set(brandsArr);
  // Insert brands in DB
  const result = await brandsColl.insertMany(
    [...brandsSet].map((brandStr) => ({ name: brandStr }))
  );
  console.log(
    `-- Inserted ${result.insertedCount} docs into brands collection`
  );
};

const insertFoods = async (
  foods: FoodOriginal[],
  foodsColl: Collection,
  catColl: Collection,
  brandsColl: Collection
) => {
  // Replace brands and categories in foods with corresponding ids in DB
  const foodsArr: FoodFinal[] = await Promise.all(
    foods.map(async (food) => {
      const categoriesIds = await Promise.all(
        food.categories.map(async (categoryStr) => {
          const result = await catColl.findOne({ name: categoryStr });
          return result?._id.toString();
        })
      );
      const { categories, ...restFood } = food;

      if (restFood.brand) {
        const result = await brandsColl.findOne({ name: food.brand });
        const brandId = result?._id.toString();
        const { brand, ...rest } = restFood;
        return { ...rest, categoriesIds, brandId };
      }
      return { ...restFood, categoriesIds };
    })
  );

  // Insert foods in DB
  const result = await foodsColl.insertMany(foodsArr);
  console.log(`-- Inserted ${result.insertedCount} docs into foods collection`);
};

const resetDb = async (
  foodsColl: Collection,
  catColl: Collection,
  brandsColl: Collection
) => {
  await deleteAllCategories(catColl);
  await insertCategories(foods, catColl);
  await deleteAllBrands(brandsColl);
  await insertBrands(foods, brandsColl);
  await deleteAllFoods(foodsColl);
  await insertFoods(foods, foodsColl, catColl, brandsColl);
};

export default resetDb;
