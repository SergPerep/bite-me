import { Collection } from "mongodb";
import categories from "../data/categories";
const fillUpCategories = async(cats: Collection) => {
    try {
        const deleteResult = await cats.deleteMany({});
        console.log(`Deleted ${deleteResult.deletedCount} docs`)
        const categoryArr = categories.map(cat => ({ name: cat.toLocaleLowerCase()}))
        const insertResult = await cats.insertMany(categoryArr);
        console.log(insertResult.insertedIds);
    } catch (error) {
        console.error(error)
    }
}

export default fillUpCategories;