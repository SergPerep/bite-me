import FoodItem from "./FoodItem";
import { Foods } from "../../types";

const FoodList = ({ foods }: { foods: Foods }) => {
    return <div className="foods">
        {foods.map((food, index) => <FoodItem food={food} key={index} />)}
    </div>
}

export default FoodList;