import Nutrients from "./Nutrients";
import Categories from "./Categories";
import { Food, Foods } from "../types";

const FoodItem = ({ food }: { food: Food}) => {
    return <div className="food">
        <div className="food__header">
            <span className="food__title">{food.name.nl}</span><span className="food__package-size"> | {food.packageSize}</span>
        </div>
        <Nutrients nutrientVals={{ 
            fatsNum: food.nutrition.fats, 
            carbsNum: food.nutrition.carbohydrates, 
            proteinsNum: food.nutrition.proteins }} />
        <Categories categories={food.categories} />
    </div>
}

const FoodList = ({ foods }: { foods: Foods }) => {
    return <div className="foods">
        {foods.map((food, index) => <FoodItem food={food} key={index} />)}
    </div>
}

export default FoodList;