import Nutrients from "./Nutrients";
import Categories from "./Categories";
import { Food } from "../../types";

const FoodItem = ({ food }: { food: Food}) => {
    return <div className="food">
        <div className="food__header">
            <span className="food__title">{food.name.nl}</span>
            <span className="food__package-size"> | {food.packageSize} {food.unit}</span>
        </div>
        <Nutrients nutrientVals={{ 
            per: food.nutrition.per,
            fatsNum: food.nutrition.fats, 
            carbsNum: food.nutrition.carbohydrates, 
            proteinsNum: food.nutrition.proteins }} />
        <Categories categories={food.categories} />
    </div>
}

export default FoodItem;