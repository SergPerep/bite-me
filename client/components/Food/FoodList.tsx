import FoodItem from "./FoodItem";
import { Foods } from "../../types";

const FoodList = ({ foods }: { foods: Foods }) => {
  return (
    <div className="foods">
      {foods.map((food) => (
        <FoodItem food={food} key={food.id} />
      ))}
    </div>
  );
};

export default FoodList;
